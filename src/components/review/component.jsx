import { ReviewUserContainer } from "../review-user/container";

export const Review = ({ id, userName, rating, text }) => {
  return (
    <div id={id}>
      <ReviewUserContainer userName={userName} />
      <span> - rating: {rating}:</span>
      <br />
      <p>{text}</p>
    </div>
  );
};
