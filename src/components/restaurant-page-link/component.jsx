import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.css";

export const RestaurantPageLink = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, { [styles.activeLink]: isActive })
      }
    >
      {name}
    </NavLink>
  );
};
