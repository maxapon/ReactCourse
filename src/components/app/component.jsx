import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";
import { ScrollBar } from "../scrollBar/component";
import { useState } from "react";
import { TabBar } from "../tab-bar/component";
import "./app.css";

export const App = () => {
  const [currRestaurantIndx, setCurrRestaurantIndx] = useState(0);
  function changeActiveTab(event) {
    setCurrRestaurantIndx(Number(event.target.value));
  }

  return (
    <Layout>
      <ScrollBar />
      <TabBar
        restaurants={restaurants}
        currRestaurantIndx={currRestaurantIndx}
        clickCallback={changeActiveTab}
      />
      <div>
        {Array(5).fill(
          <Restaurant
            id={restaurants[currRestaurantIndx].id}
            name={restaurants[currRestaurantIndx].name}
            menu={restaurants[currRestaurantIndx].menu}
            reviews={restaurants[currRestaurantIndx].reviews}
          />
        )}
      </div>
    </Layout>
  );
};
