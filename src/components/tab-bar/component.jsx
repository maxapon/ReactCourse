import styles from "./styles.module.css";

export const TabBar = ({ restaurants, currRestaurantIndx, clickCallback }) => {
  return (
    <div className={styles.tab}>
      {restaurants.map((restaurant, indx) => (
        <button
          className={`${styles.tabBtn} ${
            indx === currRestaurantIndx && styles.tabBtnActive
          } `}
          onClick={clickCallback}
          value={indx}
          key={restaurant.id}
          disabled={!restaurant.menu?.length}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};
