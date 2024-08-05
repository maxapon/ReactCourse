import { Outlet } from "react-router-dom";
import { RestaurantPageLink } from "../restaurant-page-link/component";
import styles from "./styles.module.css";

export const RestaurantPage = ({ restaurantList }) => {
  return (
    <>
      <div>
        {restaurantList.map((item) => (
          <div style={styles.inlineDiv} key={item.id}>
            <RestaurantPageLink
              name={item.name}
              to={`/restaurant/${item.id}`}
            />
          </div>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
