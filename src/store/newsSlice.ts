import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOneNews } from "../data/data_2";

type TNews = {
  allNews: TOneNews[];
  searched: TOneNews[];
  searchedValue: string;
}

const initialState: TNews = {
  allNews: [],
  searched: [],
  searchedValue: ""
}

// type TAllNews = {
//   allNews: 
// }


const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    updateAllNews(state, action: PayloadAction<TNews>) {
      // const { allNews } = action.payload; 
      // state.allNews = allNews;
      state.allNews = action.payload.allNews;
    },
    updateSearched(state, action: PayloadAction<TNews>) {
      state.searched = action.payload.searched;
    },
    updateSearchedValue(state, action: PayloadAction<TNews>) {
      state.searchedValue = action.payload.searchedValue;
    },

  }
})

export const { 
  updateAllNews, 
  updateSearched, 
  updateSearchedValue 
} = newsSlice.actions;

export default newsSlice.reducer;