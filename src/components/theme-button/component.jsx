import { useTheme, ThemeTypes } from "../theme-context/component";
import classNames from "classnames";
import styles from "./styles.module.css";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
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
