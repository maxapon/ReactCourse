import { Restaurant } from "./component";
import { useGetRestaurantByIdQuery } from "../../redux/services/api";

export const RestaurantContainer = ({ restId }) => {
  const { data: restData, isSuccess: restIsSuccess } =
    useGetRestaurantByIdQuery(restId);

  if (!restIsSuccess) return null;

  return <Restaurant id={restData.id} name={restData.name} />;
};
