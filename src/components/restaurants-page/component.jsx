import { Outlet } from "react-router-dom";
import { RestaurantPageLink } from "../restaurant-page-link/component";

export const RestaurantPage = ({ restaurantList }) => {
  return (
    <>
      <div>
        {restaurantList.map((item) => (
          <div style={{ display: "inline-block", margin: 5 }} key={item.id}>
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
