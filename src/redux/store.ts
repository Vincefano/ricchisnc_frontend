import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";

export const store = configureStore({
  reducer: {
    /** slice for login status */
    loginStatus: loginStatus,
  },
});
