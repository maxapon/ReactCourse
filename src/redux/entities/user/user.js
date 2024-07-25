import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const UserSlice = createSlice({
    name: "User",
    initialState: entityAdapter.getInitialState({
        entities: {},
        ids: [],
        requestStatus: "idle",
    }
    ),
    selectors: {
        selectUserIds: (state) => state.id,
        selectUserById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.requestStatus = "pending";
        }).addCase(getUsers.rejected, (state) => {
            state.requestStatus = "rejected";
        }).addCase(getUsers.fulfilled, (state, {payload}) => {
            state.requestStatus = "fulfilled";
            entityAdapter.setAll(state, payload);
        })
    }
});

export const { selectUserIds, selectUserById } = UserSlice.selectors;