import classnames from "classnames";
import styles from "./styles.module.css";
import { ThemeButton } from "../theme-button/component";
import { Profile } from "../profile/component";

export const Header = ({ imageVariant }) => {
  return (
    <header
      className={classnames(styles.header, {
        [styles.headerImageDefault]: imageVariant === "Default",
        [styles.headerImageAlternate]: imageVariant === "Other",
      })}
    >
      <div className={styles.headerDiv}>
        <h1 className={styles.headerH1}>Restaurants:</h1>
        <p className={styles.headerP}>Header description</p>
        <ThemeButton />
      </div>
      <div className={classnames(styles.headerDiv, styles.headerDivProfile)}>
        <Profile />
      </div>
    </header>
  );
};
