import { configureStore } from "@reduxjs/toolkit";
import loginError from "./loginError";
import wrapperPage from "./wrapperPage";

export const store = configureStore({
  reducer: {
    /** slice for login error */
    loginError,
    /** slice for current Page into wrapper status */
    wrapperPage,
  },
});
