import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('users/getUsers', 
        async(_, {rejectWithValue, fulfillWithValue}) => {
const responce = await fetch("http://localhost:3001/api/users/");
const result = await responce.json();

if (!result.length)
{
         rejectWithValue("Empty data from server");
}
        return fulfillWithValue(result);

});