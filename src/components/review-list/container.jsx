import { ReviewList } from "./component";
import { useGetUsersQuery } from "../../redux/services/api";

export const ReviewListContainer = ({ reviews }) => {
  const { data: users, isSuccess } = useGetUsersQuery();
  if (reviews.Length === 0) return "No reviews";
  if (!isSuccess) return "error in process of getting data from server";
  return <ReviewList reviews={reviews} users={users} />;
};
