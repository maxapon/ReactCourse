import { ThemeTypes } from "../theme-context/component";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Counter = ({ value, increment, decrement, theme }) => {
  return (
    <div className={styles.counterContainer}>
      <button
        className={classNames(styles.counterBtn, {
          [styles.counterBtnLight]: theme === ThemeTypes.LIGHT,
          [styles.counterBtnDark]: theme === ThemeTypes.DARK,
        })}
        onClick={decrement}
      >
        -
      </button>
      <div className={styles.counterValueContainer}>{value}</div>
      <button
        className={classNames(styles.counterBtn, {
          [styles.counterBtnLight]: theme === ThemeTypes.LIGHT,
          [styles.counterBtnDark]: theme === ThemeTypes.DARK,
        })}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
