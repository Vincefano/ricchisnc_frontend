import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "../types";

const initialState = { error: {} };

const loginError = createSlice({
  name: "loginError",
  initialState,
  reducers: {
    setLoginError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const loginErrorSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.loginError
);

export default loginError.reducer;
export const { setLoginError } = loginError.actions;
