import { RestaurantPage } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantPageContainer = () => {
  const { data, isSuccess } = useGetRestaurantsQuery();
  if (!isSuccess) return null;
  return <RestaurantPage restaurantList={data} />;
};
