import { configureStore } from "@reduxjs/toolkit";
import smthReducer from "./smthSlice";
import newsReducer from "./newsSlice";

export default configureStore({
  reducer: {
    // smth: smthReducer,
    news: newsReducer,
    // user: userReducer,
  }
})


