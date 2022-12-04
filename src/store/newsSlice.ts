import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFlatCard } from "../data/data_2";
import { TNewsCardInfo } from "../../src/components/NewsCards/NewsCardsInfo"

type TNews = {
  allNews: TNewsCardInfo[];
  searched: TNewsCardInfo[];
  searchedValue: string;
}

const initialState: TNews = {
  allNews: [],
  searched: [],
  searchedValue: ""
}



const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    updateAllNews(state, action: PayloadAction<TNewsCardInfo[]>) {
      // const { allNews } = action.payload; 
      // state.allNews = allNews;
      // state.allNews = action.payload.allNews;
      state.allNews = action.payload;

    },
    updateSearched(state, action: PayloadAction<TNewsCardInfo[]>) {
      // state.searched = action.payload.searched;
      state.searched = action.payload;

    },
    updateSearchedValue(state, action: PayloadAction<string>) {
      // state.searchedValue = action.payload.searchedValue;
      state.searchedValue = action.payload;

    },

  }
})

export const { 
  updateAllNews, 
  updateSearched, 
  updateSearchedValue 
} = newsSlice.actions;

export default newsSlice.reducer;