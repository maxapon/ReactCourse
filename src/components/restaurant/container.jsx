import { useSelector } from "react-redux";
import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurant";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetDishByRestId } from "../../redux/entities/dish/get-dish-by-rest-id";
import { GetReviewByRestId } from "../../redux/entities/review/get-review-by-rest-id";

export const RestaurantContainer = ({ restId }) => {
  const restData = useSelector((state) => selectRestaurantById(state, restId));

  //getting data from server
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDishByRestId(restId));
    dispatch(GetReviewByRestId(restId));
  }, [dispatch, restId]);
  //end

  if (!restData || !restData.menu.length) return null;

  return (
    <Restaurant
      id={restData.id}
      name={restData.name}
      menu={restData.menu}
      reviews={restData.reviews}
    />
  );
};
