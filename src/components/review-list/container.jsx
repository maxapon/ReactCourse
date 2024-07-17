import { ReviewList } from "./component";

export const ReviewListContainer = ({ reviewIds }) => {
  if (!reviewIds.length) return "No reviews";
  return <ReviewList reviewIds={reviewIds} />;
};
