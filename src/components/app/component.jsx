import { Layout } from "../layout/component";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/component";
import { UserContextProvider } from "../user-context/component";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { AppContentContainer } from "../app-content/container";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <AppContentContainer />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
