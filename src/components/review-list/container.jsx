import { ReviewList } from "./component";
import { useGetUsersQuery } from "../../redux/services/api";
import { useGetReviewsByRestIdQuery } from "../../redux/services/api";

export const ReviewListContainer = ({ restaurantId }) => {
  const { data: reviews, isSuccess: reviewIsSuccess } =
    useGetReviewsByRestIdQuery(restaurantId);
  const { data: users, isSuccess: isUserSuccess } = useGetUsersQuery();

  if (!isUserSuccess || !reviewIsSuccess) return "loading";

  if (!reviews.length) return "No reviews";

  return <ReviewList reviews={reviews} users={users} />;
};
