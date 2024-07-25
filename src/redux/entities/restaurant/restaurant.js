import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const RestaurantSlice = createSlice({
    name: "Restaurant",
    initialState: entityAdapter.getInitialState({
        entities: {},
        ids: [],
        requestStatus: "idle",
    }),
    selectors: {
        selectRequestStatus: (state) => state.requestStatus,
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurants: createSelector([(state) => state], (state) => state.ids.map((id) => ({id: id, name: state.entities[id].name}))) ,
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.pending, (state) => {
            state.requestStatus = "pending";
        })
        .addCase(getRestaurants.fulfilled, (state, {payload}) => {
            state.requestStatus = "fulfilled";
            entityAdapter.setAll(state, payload);
        })
        .addCase(getRestaurants.rejected, (state) => {
            state.requestStatus = "rejected";
        })
    }
});

export const { selectRequestStatus, selectRestaurantIds, selectRestaurantById, selectRestaurants } = RestaurantSlice.selectors;