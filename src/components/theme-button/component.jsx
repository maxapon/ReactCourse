import { UseTheme, ThemeTypes } from "../theme-context/component";
import classNames from "classnames";
import styles from "./styles.module.css";

export const ThemeButton = () => {
  const { theme, toggleTheme } = UseTheme();
  return (
    <button
      className={classNames(styles.themeBtn, {
        [styles.themeBtnLight]: theme === ThemeTypes.LIGHT,
        [styles.themeBtnDark]: theme === ThemeTypes.DARK,
      })}
      onClick={toggleTheme}
    >
      {theme}
    </button>
  );
};
