import { useState } from "react";
import { AppContent } from "./component";
import {
  selectRequestStatus,
  selectRestaurantIds,
  selectRestaurants,
} from "../../redux/entities/restaurant/restaurant";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";
import { getUsers } from "../../redux/entities/user/get-users";

export const AppContentContainer = () => {
  //getting data from server
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getUsers());
  }, [dispatch]);
  //end

  const reqStatus = useSelector(selectRequestStatus);
  const restIds = useSelector(selectRestaurantIds);
  const restData = useSelector(selectRestaurants);
  const [currRestId, setCurrRestId] = useState(restIds[0]);
  if (reqStatus === "idle" || reqStatus === "pending")
    return <h3>Loading data</h3>;

  if (reqStatus === "rejected") return <h3>Error while data is loading</h3>;

  if (reqStatus === "fulfilled" && currRestId === undefined)
    setCurrRestId(restIds[0]);

  if (!restData) return null;

  function changeCurrentRestId(event) {
    setCurrRestId(event.target.value);
  }
  return (
    <AppContent
      tabItems={restData}
      currTabId={currRestId}
      tabClickCallBack={changeCurrentRestId}
    />
  );
};
