import { Restaurant } from "./component";
import {
  useGetRestaurantByIdQuery,
  useGetReviewsByRestIdQuery,
  useGetMenuByRestIdQuery,
} from "../../redux/services/api";

export const RestaurantContainer = ({ restId }) => {
  const { data: restData, isSuccess: restIsSuccess } =
    useGetRestaurantByIdQuery(restId);

  const { data: menuData, isSuccess: menuIsSuccess } =
    useGetMenuByRestIdQuery(restId);

  const { data: reviewsData, isSuccess: reviewIsSuccess } =
    useGetReviewsByRestIdQuery(restId);

  if (!restIsSuccess || !menuIsSuccess || !reviewIsSuccess) return null;

  return (
    <Restaurant
      id={restData.id}
      name={restData.name}
      menu={menuData}
      reviews={reviewsData}
    />
  );
};
