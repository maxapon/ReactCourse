import classnames from "classnames";
import styles from "./styles.module.css";

export const Header = ({ imageVariant }) => {
  return (
    <header
      className={classnames(styles.header, {
        [styles.headerImageDefault]: imageVariant === "Default",
        [styles.headerImageAlternate]: imageVariant === "Other",
      })}
    >
      <h1 className={styles.headerH1}>Restaurants:</h1>
      <p className={styles.headerP}>Header description</p>
    </header>
  );
};
