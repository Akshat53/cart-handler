import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userStore";

const store = configureStore({
  reducer: {
    userStore: userStore,
  },
});

export default store;
