import { configureStore } from "@reduxjs/toolkit";

import users from "./slices/user-slice";
export const store = configureStore({
  reducer: {
    users,
  },
});
