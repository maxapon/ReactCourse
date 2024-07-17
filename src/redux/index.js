import { configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restautant";
import { DishSlice } from "./entities/dish";
import { UserSlice } from "./entities/user";
import { ReviewSlice } from "./entities/review";

export const store = configureStore({reducer: {
    [RestaurantSlice.name]: RestaurantSlice.reducer,
    [DishSlice.name]: DishSlice.reducer,
    [UserSlice.name]: UserSlice.reducer,
    [ReviewSlice.name]: ReviewSlice.reducer
}});