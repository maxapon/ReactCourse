import { TabBar } from "./component";

export const TabBarContainer = ({ items, currItemId, clickCallback }) => {
  return (
    <TabBar
      items={items}
      currItemId={currItemId}
      clickCallback={clickCallback}
    />
  );
};
