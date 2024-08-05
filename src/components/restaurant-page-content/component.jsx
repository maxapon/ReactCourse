import { NavLink, Outlet } from "react-router-dom";

export const RestaurantPageContent = () => {
  return (
    <>
      <div>
        <div style={{ display: "inline-block", margin: 5 }}>
          <NavLink to={"menu"}>Menu</NavLink>
        </div>
        <div style={{ display: "inline-block", margin: 5 }}>
          <NavLink to={"reviews"}>Reviews</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
