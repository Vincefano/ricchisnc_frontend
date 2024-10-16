import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "../types";

const initialState = { loginData: {} };

const loginStatus = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
  },
});

export const loginStatusSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.loginData
);

export default loginStatus.reducer;
export const { setLoginData } = loginStatus.actions;
