import { useReducer } from "react";
import { Counter } from "../counter/component";
import { useTheme, ThemeTypes } from "../theme-context/component";
import { useUser } from "../user-context/component";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useCreateReviewMutation } from "../../redux/services/api";

const INITIAL_FORM = {
  text: "",
  rating: 5,
};

const COUNTER_CONF = {
  min: 1,
  max: 5,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setText":
      return { ...state, text: payload };
    case "increaseRating":
      return { ...state, rating: Math.min(state.rating + 1, COUNTER_CONF.max) };
    case "decreaseRating":
      return { ...state, rating: Math.max(state.rating - 1, COUNTER_CONF.min) };
    case "clear":
      return INITIAL_FORM;
    default:
      return state;
  }
}

const useForm = (initState) => {
  return useReducer(reducer, initState);
};

export const ReviewForm = ({ restaurantId }) => {
  const [form, dispatch] = useForm(INITIAL_FORM);
  const { theme } = useTheme();
  const { user } = useUser();

  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (!user.isAutorize) {
    return;
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewBtnContentContainer}>
        <span className={styles.reviewSpan}>Text:</span>
        <input
          className={styles.reviewTextInput}
          value={form.text}
          onChange={(event) => {
            dispatch({ type: "setText", payload: event.target.value });
          }}
        />
      </div>
      <div className={styles.reviewBtnContentContainer}>
        <span className={styles.reviewSpan}>Rating us:</span>
        <Counter
          value={form.rating}
          increment={() => {
            dispatch({ type: "increaseRating" });
          }}
          decrement={() => {
            dispatch({ type: "decreaseRating" });
          }}
          theme={theme}
        />
      </div>
      <div>
        <button
          className={classNames(styles.reviewBtn, {
            [styles.reviewBtnLight]: theme === ThemeTypes.LIGHT,
            [styles.reviewBtnDark]: theme === ThemeTypes.DARK,
          })}
          onClick={() => {
            form.userId = user.userId;
            createReview({ review: form, restaurantId: restaurantId });
            dispatch({ type: "clear" });
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading" : "Save"}
        </button>
      </div>
    </div>
  );
};
