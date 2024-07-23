import { ScrollBar } from "../scrollBar/component";
import { TabBarContainer } from "../tab-bar/container";
import { RestaurantContainer } from "../restaurant/container";

export const AppContent = ({ tabItems, currTabId, tabClickCallBack }) => {
  return (
    <>
      <ScrollBar />
      <TabBarContainer
        items={tabItems}
        currItemId={currTabId}
        clickCallback={tabClickCallBack}
      />
      <div>{Array(5).fill(<RestaurantContainer restId={currTabId} />)}</div>
    </>
  );
};
