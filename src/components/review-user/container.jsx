import { ReviewUser } from "./component";
import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/user";

export const ReviewUserContainer = ({ userId }) => {
  const userData = useSelector((state) => selectUserById(state, userId));
  if (!userData) return null;

  return <ReviewUser userName={userData.name} />;
};
