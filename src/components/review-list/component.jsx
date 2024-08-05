import { ReviewContainer } from "../review/container";

export const ReviewList = ({ reviews, users }) => {
  return (
    <ul>
      {reviews.map((item) => (
        <li key={item.id}>
          <ReviewContainer
            review={item}
            userName={
              Array.from(users).find((user) => user.id === item.userId).name
            }
          />
        </li>
      ))}
    </ul>
  );
};
