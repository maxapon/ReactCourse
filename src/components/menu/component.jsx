import { DishContainer } from "../dish/container";

export const Menu = ({ dishIds }) => {
  return (
    <ul>
      {dishIds.map((id) => (
        <li key={id}>
          <DishContainer dishId={id} />
        </li>
      ))}
    </ul>
  );
};
