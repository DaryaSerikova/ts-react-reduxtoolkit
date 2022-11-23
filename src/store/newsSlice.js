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
      // console.log('state', state)
      // console.log('state', state)

      state.allNews = action.payload;
    },
    updateSearched(state, action) {
      state.searched = action.payload;
    },
    updateSearchedValue(state, action) {
      state.searchedValue = action.payload;
    },

  }
})

export const { updateAllNews, updateSearched, updateSearchedValue } = newsSlice.actions;

export default newsSlice.reducer;