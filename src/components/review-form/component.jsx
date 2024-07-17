import { useReducer } from "react";
import { Counter } from "../counter/component";
import { UseTheme, ThemeTypes } from "../theme-context/component";
import { UseUser } from "../user-context/component";
import styles from "./styles.module.css";
import classNames from "classnames";

const INITIAL_FORM = {
  name: "",
  text: "",
  rating: 5,
};

const COUNTER_CONF = {
  min: 1,
  max: 5,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
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

export const ReviewForm = () => {
  const [form, dispatch] = useForm(INITIAL_FORM);
  const { theme } = UseTheme();
  const { user } = UseUser();
  if (!user.isAutorize) {
    console.log("here");
    return;
  }

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewBtnContentContainer}>
        <span className={styles.reviewSpan}>Name:</span>
        <input
          className={styles.reviewTextInput}
          value={form.name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
          }}
        />
      </div>
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
        />
      </div>
      <div>
        <button
          className={classNames(styles.reviewBtn, {
            [styles.reviewBtnLight]: theme === ThemeTypes.LIGHT,
            [styles.reviewBtnDark]: theme === ThemeTypes.DARK,
          })}
          onClick={() => {
            dispatch({ type: "clear" });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
