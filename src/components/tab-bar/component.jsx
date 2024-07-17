import classNames from "classnames";
import styles from "./styles.module.css";

export const TabBar = ({ restaurants, currRestaurantId, clickCallback }) => {
  return (
    <div className={styles.tab}>
      {restaurants.map((restaurant, indx) => (
        <button
          className={classNames(
            styles.tabBtn,
            restaurant.id === currRestaurantId && styles.tabBtnActive
          )}
          onClick={clickCallback}
          value={restaurant.id}
          key={restaurant.id}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};
