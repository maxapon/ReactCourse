import { Dish } from "./component";
import { useUser } from "../user-context/component";

export const DishContainer = ({ dish }) => {
  const { user } = useUser();
  if (!dish) return null;

  const { id, name, price, ingredients } = dish;

  return (
    <Dish
      id={id}
      name={name}
      price={price}
      ingridients={ingredients}
      isUserAutorize={user.isAutorize}
    />
  );
};
