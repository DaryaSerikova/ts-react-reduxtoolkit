import { createSlice } from "@reduxjs/toolkit";


const newsSlice = createSlice({
  name: "news",
  initialState: {
    allNews: [],
    searched: [],
    searchedValue: ""
  },
  reducers: {
    updateAllNews(state, action) {
      const { allNews } = action.payload; 
      state.allNews = allNews;
    },
    updateSearched(state, action) {
      state.searched = action.payload.searched;
    },
    updateSearchedValue(state, action, searchedValue) {
      state.searchedValue = action.payload.searchedValue;
    },

  }
})

export const { updateAllNews, updateSearched, updateSearchedValue } = newsSlice.actions;

export default newsSlice.reducer;