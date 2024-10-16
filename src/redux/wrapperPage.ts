import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxStore } from "../types";

const initialState = { currentPage: "" };

const wrapperPage = createSlice({
  name: "wrapperPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const currentPageSelector = createSelector(
  (state: ReduxStore) => state,
  (state: ReduxStore) => state.wrapperPage.currentPage
);

export default wrapperPage.reducer;
export const { setCurrentPage } = wrapperPage.actions;
