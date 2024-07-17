import { MenuContainer } from "../menu/container";
import { ReviewListContainer } from "../review-list/container";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.css";

export const Restaurant = ({ id, name, menu, reviews }) => {
  return (
    <div id={id} className={styles.restContainer}>
      <h3>{name}</h3>
      <h4 className={styles.restH4}>Menu:</h4>
      <div className={styles.restLine}></div>
      <MenuContainer dishIds={menu} />
      <h4 className={styles.restH4}>Reviews:</h4>
      <div className={styles.restLine}></div>
      <ReviewListContainer reviewIds={reviews} />
      <ReviewForm />
    </div>
  );
};
