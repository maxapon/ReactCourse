import { useState } from "react";
import { AppContent } from "./component";
import {
  useGetRestaurantsQuery,
  useGetUsersQuery,
} from "../../redux/services/api";

export const AppContentContainer = () => {
  const { data, isError, isFetching, isLoading } = useGetRestaurantsQuery(
    undefined,
    {
      selectFromResult: ({ data, ...rest }) => ({
        ...rest,
        data: data?.map((item) => ({
          id: item.id,
          name: item.name,
        })),
      }),
    }
  );

  useGetUsersQuery();

  const [currRestId, setCurrRestId] = useState(undefined);

  if (isFetching || isLoading) return <h3>Loading data</h3>;

  if (isError) return <h3>Error while data is loading</h3>;

  if (currRestId === undefined && data !== undefined) setCurrRestId(data[0].id);

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
