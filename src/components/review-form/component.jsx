import { useReducer } from "react";
import { Counter } from "../counter/component";

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
  return (
    <div>
      <div>
        <span>Name:</span>
        <input
          value={form.name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Text:</span>
        <input
          value={form.text}
          onChange={(event) => {
            dispatch({ type: "setText", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Rating:</span>
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
      <button
        onClick={() => {
          dispatch({ type: "clear" });
        }}
      >
        Save
      </button>
    </div>
  );
};
