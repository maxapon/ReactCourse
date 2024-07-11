import styles from "./styles.module.css";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterBtn} onClick={decrement}>
        -
      </button>
      <div className={styles.counterValueContainer}>{value}</div>
      <button className={styles.counterBtn} onClick={increment}>
        +
      </button>
    </div>
  );
};
