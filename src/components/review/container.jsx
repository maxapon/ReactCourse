import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectUserById } from "../../redux/entities/user";
import { selectReviewById } from "../../redux/entities/review";

export const ReviewContainer = ({ reviewId }) => {
  const reviewData = useSelector((state) => selectReviewById(state, reviewId));
  if (!reviewData) return null;

  const userData = useSelector((state) =>
    selectUserById(state, reviewData.userId)
  );
  if (!userData) return null;

  return (
    <Review
      id={reviewData.id}
      user={userData.name}
      rating={reviewData.rating}
      text={reviewData.text}
    />
  );
};
