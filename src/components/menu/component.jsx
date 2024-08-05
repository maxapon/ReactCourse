import { DishContainer } from "../dish/container";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          <DishContainer dish={dish} />
        </li>
      ))}
    </ul>
  );
};
