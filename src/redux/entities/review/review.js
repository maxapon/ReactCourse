import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { GetReviewByRestId } from "./get-review-by-rest-id";

const entityAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
    name: "Review",
    initialState: entityAdapter.getInitialState({
        entities: {},
        ids: [],
        requestStatus: "idle",
    }), 
    selectors: {
        selectReviewById: (state, id) => state.entities[id]
    },
    extraReducers: (builder) => {
        builder.addCase(GetReviewByRestId.pending, (state) => {
            state.requestStatus = "pending";
        }).addCase(GetReviewByRestId.rejected, (state) => {
            state.requestStatus = "rejected";
        }).addCase(GetReviewByRestId.fulfilled, (state, {payload}) => {
            state.requestStatus = "fulfilled";
            entityAdapter.setAll(state, payload);
        })
    }
});

export const { selectReviewById } = ReviewSlice.selectors;