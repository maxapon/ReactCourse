import { configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant/restaurant";
import { DishSlice } from "./entities/dish/dish";
import { UserSlice } from "./entities/user/user";
import { ReviewSlice } from "./entities/review/review";

export const store = configureStore({reducer: {
    [RestaurantSlice.name]: RestaurantSlice.reducer,
    [DishSlice.name]: DishSlice.reducer,
    [UserSlice.name]: UserSlice.reducer,
    [ReviewSlice.name]: ReviewSlice.reducer
}});