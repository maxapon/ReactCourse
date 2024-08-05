import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

export const RestaurantPageContent = () => {
  return (
    <>
      <div>
        <div style={styles.inlineDiv}>
          <NavLink to={"menu"}>Menu</NavLink>
        </div>
        <div style={styles.inlineDiv}>
          <NavLink to={"reviews"}>Reviews</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
