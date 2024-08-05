import { Layout } from "../layout/component";
import "./app.css";
import { ThemeContextProvider } from "../theme-context/component";
import { UserContextProvider } from "../user-context/component";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { AppContentContainer } from "../app-content/container";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RestaurantPageContainer } from "../restaurants-page/container";
import { RestaurantPageContent } from "../restaurant-page-content/component";
import { RestaurantPageMenu } from "../restaurant-page-menu/component";
import { RestaurantPageReviews } from "../restaurant-page-reviews/component";
import { RestaurantPageDish } from "../restaurant-page-dish/component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        path: "/HomePage",
        element: <AppContentContainer />,
      },
      {
        path: "/restaurant",
        element: <RestaurantPageContainer />,
        children: [
          {
            path: ":restaurantId",
            element: (
              <>
                <RestaurantPageContent />
                <Navigate to="menu" />
              </>
            ),
            children: [
              {
                path: "menu",
                element: <RestaurantPageMenu />,
              },
              {
                path: "reviews",
                element: <RestaurantPageReviews />,
              },
            ],
          },
        ],
      },
      {
        path: "dish/:dishId",
        element: <RestaurantPageDish />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
