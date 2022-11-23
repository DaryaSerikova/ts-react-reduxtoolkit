import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    // city: null,
    amountRooms: '',
    priceFrom: '',
    priceTo: '',
  },
  reducers: {
    updateAmountRooms(state, action) {
      state.amountRooms = action.payload;
    },
    updatePriceFrom(state, action) {
      state.priceFrom = action.payload;
    },
    updatePriceTo(state, action) {
      state.priceTo = action.payload;
    },
  }
})

export const { updateAmountRooms, updatePriceFrom, updatePriceTo } = filtersSlice.actions;

export default filtersSlice.reducer;