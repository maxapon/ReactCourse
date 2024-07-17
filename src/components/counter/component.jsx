import { UseTheme, ThemeTypes } from "../theme-context/component";
import { UseUser } from "../user-context/component";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Counter = ({ value, increment, decrement }) => {
  const { user } = UseUser();
  const { theme } = UseTheme();
  if (!user.isAutorize) return;

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
