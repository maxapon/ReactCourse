import { useSelector } from "react-redux";
import { TabBar } from "./component";
import { selectRestaurants } from "../../redux/entities/restautant";

export const TabBarContainer = ({ currRestaurantId, clickCallback }) => {
  const restData = useSelector(selectRestaurants);
  if (!restData) return null;
  return (
    <TabBar
      restaurants={restData}
      currRestaurantId={currRestaurantId}
      clickCallback={clickCallback}
    />
  );
};
