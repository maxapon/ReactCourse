import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../materials/normalized-mock";

export const ReviewSlice = createSlice({
    name: "Review",
    initialState: {
        entities: normalizedReviews.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {}),
        ids: normalizedReviews.map((item) => item.id)
    },
    selectors: {
        selectReviewById: (state, id) => state.entities[id]
    }
});

export const { selectReviewById } = ReviewSlice.selectors;