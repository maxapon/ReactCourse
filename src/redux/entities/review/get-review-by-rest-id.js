import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetReviewByRestId = createAsyncThunk('', async(_, {rejectWithValue, fulfillWithValue, restId}) => {
const responce = await fetch("http://localhost:3001/api/reviews?restaurantId=:" + restId);
const result = await responce.json();

if (!result.length)
    rejectWithValue("Empty data from server");

return fulfillWithValue(result);

});