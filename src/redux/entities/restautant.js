import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mock";

export const RestaurantSlice = createSlice({
    name: "Restaurant",
    initialState: {
        entities: normalizedRestaurants.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {}),
        ids: normalizedRestaurants.map((item) => item.id),
        idsAndNames: normalizedRestaurants.map((item) => ({id: item.id, name: item.name}))
    },
    selectors: {
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurants: (state) => state.idsAndNames
    }
});

export const { selectRestaurantIds, selectRestaurantById, selectRestaurants } = RestaurantSlice.selectors;