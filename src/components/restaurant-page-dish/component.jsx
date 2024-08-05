import { Link, useParams } from "react-router-dom";
import { useUser } from "../user-context/component";
import { useGetDishByDishIdQuery } from "../../redux/services/api";
import { Dish } from "../dish/component";

export const RestaurantPageDish = () => {
  const { dishId } = useParams();
  const { user } = useUser();
  const { data: dish, isSuccess } = useGetDishByDishIdQuery(dishId);

  if (!isSuccess) return "loading...";
  if (!dish) return null;

  const { id, name, price, ingredients } = dish;

  return (
    <>
      <h2>{name}</h2>
      <Dish
        id={id}
        name={name}
        price={price}
        ingridients={ingredients}
        isUserAutorize={user.isAutorize}
      />
      <br />
      <Link to="/restaurant">To main page</Link>
    </>
  );
};
