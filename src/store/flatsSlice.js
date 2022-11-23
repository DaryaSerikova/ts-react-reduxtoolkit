import { createSlice } from '@reduxjs/toolkit';


const flatsSlice = createSlice({
  name: 'flats',
  initialState: {
    all: [],
    filtered: []
  },
  reducers: {
    updateAllFlats(state, action) {
      state.all = action.payload;
    },
    updateFilteredFlats(state, action) {
      state.filtered = action.payload;
    },
  }
})

export const { updateAllFlats, updateFilteredFlats } = flatsSlice.actions;

export default flatsSlice.reducer;