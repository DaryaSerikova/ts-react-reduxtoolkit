import { createSlice } from "@reduxjs/toolkit";


const cardsWithDetailsSlice = createSlice({
  name: "cardsWithDetails",
  initialState: {
    all: [],
    filter: []
  },
  // reducers: {
  //   addCard: (state, { payload }) => {}
  // }
})

const smthSlice = createSlice({
  name: "smth",
  initialState: {
    smth: [

    ]
  },
  reducers: {
    addSmth(state, action) {},
    removeSmth(state, action) {},
    toogleSmth(state, action) {},

  }
})


// экспортируем action'ы во внешний мир, т.е. для UI
export const { addSmth, removeSmth, toogleSmth } = smthSlice.actions;

export default smthSlice.reducer;