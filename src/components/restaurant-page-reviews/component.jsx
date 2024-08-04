import { useParams } from "react-router-dom";
import { ReviewListContainer } from "../review-list/container";
import { ReviewForm } from "../review-form/component";

export const RestaurantPageReviews = () => {
  const { restaurantId } = useParams();
  return (
    <>
      <ReviewListContainer restaurantId={restaurantId} />
      <ReviewForm restaurantId={restaurantId} />
    </>
  );
};
