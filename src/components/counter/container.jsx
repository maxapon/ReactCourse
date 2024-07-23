import { useCount } from "./hooks";
import { Counter } from "./component";
import { useTheme } from "../theme-context/component";

export const CounterContainer = () => {
  const { count, increment, decrement } = useCount();
  const { theme } = useTheme();

  return (
    <Counter
      value={count}
      increment={increment}
      decrement={decrement}
      theme={theme}
    />
  );
};
