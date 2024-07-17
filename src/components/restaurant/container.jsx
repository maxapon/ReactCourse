import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/entities/restautant";

export const RestaurantContainer = ({ restId }) => {
  const restData = useSelector((state) => selectRestaurantById(state, restId));

  if (!restData || !restData.menu.length) return null;

  return (
    <Restaurant
      id={restData.id}
      name={restData.name}
      menu={restData.menu}
      reviews={restData.reviews}
    />
  );
};
