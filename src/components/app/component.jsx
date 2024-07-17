import { RestaurantContainer } from "../restaurant/container";
import { Layout } from "../layout/component";
import { ScrollBar } from "../scrollBar/component";
import { useState } from "react";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/component";
import { UserContextProvider } from "../user-context/component";
import { TabBarContainer } from "../tab-bar/container";
import { Provider } from "react-redux";
import { store } from "../../redux";

export const App = () => {
  const [currRestId, setCurrRestId] = useState(
    "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"
  );

  function changeCurrentRestId(event) {
    setCurrRestId(event.target.value);
  }

  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <ScrollBar />
            <TabBarContainer
              currRestaurantId={currRestId}
              clickCallback={changeCurrentRestId}
            />
            <div>
              {Array(5).fill(<RestaurantContainer restId={currRestId} />)}
            </div>
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
