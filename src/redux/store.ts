import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";
import wrapperPage from "./wrapperPage";

export const store = configureStore({
  reducer: {
    /** slice for login status */
    loginStatus,
    /** slice for current Page into wrapper status */
    wrapperPage,
  },
});
