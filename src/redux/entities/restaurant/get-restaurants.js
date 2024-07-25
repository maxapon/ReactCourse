import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk('restaurants/getRestaurants', 
        async(_, {rejectWithValue, fulfillWithValue}) => {
const responce = await fetch("http://localhost:3001/api/restaurants/");
const result = await responce.json();

if (!result.length)
{
         rejectWithValue("Empty data from server");
}
        return fulfillWithValue(result);

});