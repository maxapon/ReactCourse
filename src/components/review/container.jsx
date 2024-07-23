import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/review";

export const ReviewContainer = ({ reviewId }) => {
  const reviewData = useSelector((state) => selectReviewById(state, reviewId));
  if (!reviewData) return null;

  return (
    <Review
      id={reviewData.id}
      userId={reviewData.userId}
      rating={reviewData.rating}
      text={reviewData.text}
    />
  );
};
