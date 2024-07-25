import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { GetDishByRestId } from "./get-dish-by-rest-id";

const entityAdapter = createEntityAdapter();

export const DishSlice = createSlice({
    name: "Dish",
    initialState: entityAdapter.getInitialState({
        entities: {},
        ids: [],
        requestStatus: "idle",
    }),
    selectors: {
        selectDishIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id]
    },
    extraReducers: (builder) => {
    builder.addCase(GetDishByRestId.pending, (state) => {
        state.requestStatus = "pending";
    }).addCase(GetDishByRestId.rejected, (state) => {
        state.requestStatus = "rejected";
    }).addCase(GetDishByRestId.fulfilled, (state, {payload}) => {
        state.requestStatus = "fulfilled";
        entityAdapter.setAll(state, payload);
    })}
    
});

export const { selectDishIds, selectDishById } = DishSlice.selectors;