import { Review } from "./component";

export const ReviewContainer = ({ review, userName }) => {
  if (!review) return null;

  return (
    <Review
      id={review.id}
      userName={userName}
      rating={review.rating}
      text={review.text}
    />
  );
};
