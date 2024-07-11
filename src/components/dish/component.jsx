import { CounterContainer } from "../counter/container";
import styles from "./styles.module.css";

export const Dish = ({ id, name, price, ingridients }) => {
  return (
    <div id={id} className={styles.dishContainer}>
      <div className={styles.dishTitle}>
        <span className={styles.dishName}>{name}</span>
        <span className={styles.dishPrice}>Per piece: {price}</span>
      </div>
      <p className={styles.dishIngridients}>{ingridients.join(", ")}</p>
      <CounterContainer />
    </div>
  );
};
