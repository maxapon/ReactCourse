import { ReviewUserContainer } from "../review-user/container";

export const Review = ({ id, userId, rating, text }) => {
  return (
    <div id={id}>
      <ReviewUserContainer userId={userId} />
      <span> - rating: {rating}:</span>
      <br />
      <p>{text}</p>
    </div>
  );
};
