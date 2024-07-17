import { useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishById } from "../../redux/entities/dish";

export const DishContainer = ({ dishId }) => {
  const dishData = useSelector((state) => selectDishById(state, dishId));
  if (!dishData) return null;

  const { id, name, price, ingredients } = dishData;

  return <Dish id={id} name={name} price={price} ingridients={ingredients} />;
};
