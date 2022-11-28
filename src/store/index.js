import { configureStore } from "@reduxjs/toolkit";
import smthReducer from "./smthSlice";
import newsReducer from "./newsSlice";
import filtersReducer from "./filtersSlice";
import flatsReducer from "./flatsSlice";
import userReducer from "./userSlice";


export default configureStore({
  reducer: {
    // smth: smthReducer,
    news: newsReducer,
    filters: filtersReducer,
    flats: flatsReducer,
    user: userReducer

  }
})


