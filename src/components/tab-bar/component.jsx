import classNames from "classnames";
import styles from "./styles.module.css";

export const TabBar = ({ items, currItemId, clickCallback }) => {
  return (
    <div className={styles.tab}>
      {items.map((item) => (
        <button
          className={classNames(
            styles.tabBtn,
            item.id === currItemId && styles.tabBtnActive
          )}
          onClick={clickCallback}
          value={item.id}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
