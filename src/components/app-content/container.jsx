import { useState } from "react";
import { AppContent } from "./component";
import {
  useGetRestaurantsQuery,
  useGetUsersQuery,
} from "../../redux/services/api";

const restIds = [];

export const AppContentContainer = () => {
  const { data, isError, isFetching, isLoading } = useGetRestaurantsQuery();
  useGetUsersQuery();

  const [currRestId, setCurrRestId] = useState(restIds[0]);

  if (restIds.length === 0 && !isError && !isFetching && !isLoading) {
    restIds.push(...data.map((item) => item.id));
  }

  if (isFetching || isLoading) return <h3>Loading data</h3>;

  if (isError) return <h3>Error while data is loading</h3>;

  if (currRestId === undefined && restIds.length) setCurrRestId(restIds[0]);

  if (!data) return null;

  function changeCurrentRestId(event) {
    setCurrRestId(event.target.value);
  }

  return (
    <AppContent
      tabItems={data}
      currTabId={currRestId}
      tabClickCallBack={changeCurrentRestId}
    />
  );
};
