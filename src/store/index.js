import { configureStore } from "@reduxjs/toolkit";
import smthReducer from "./smthSlice";
import newsReducer from "./newsSlice";
import filtersReducer from "./filtersSlice";


export default configureStore({
  reducer: {
    // smth: smthReducer,
    news: newsReducer,
    filters: filtersReducer,
  }
})


