import boardReducer from "./slice/BoardSlice";
import authReducer from "./slice/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    board: boardReducer,
    auth: authReducer,
  },
});

export default store;
