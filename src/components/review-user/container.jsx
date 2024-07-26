import { ReviewUser } from "./component";

export const ReviewUserContainer = ({ userName }) => {
  if (!userName) return null;

  return <ReviewUser userName={userName} />;
};
