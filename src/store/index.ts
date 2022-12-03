import { configureStore } from "@reduxjs/toolkit";
// import smthReducer from "./smthSlice";
import newsReducer from "./newsSlice";
import filtersReducer from "./filtersSlice";
import flatsReducer from "./flatsSlice";
import userReducer from "./userSlice";


let store = configureStore({
  reducer: {
    // smth: smthReducer,
    news: newsReducer,
    filters: filtersReducer,
    flats: flatsReducer,
    user: userReducer

  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
