import { ReviewContainer } from "../review/container";

export const ReviewList = ({ reviewIds }) => {
  return (
    <ul>
      {reviewIds.map((id) => (
        <li key={id}>
          <ReviewContainer reviewId={id} />
        </li>
      ))}
    </ul>
  );
};
