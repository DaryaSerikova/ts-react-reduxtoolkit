import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    // city: null,
    amountRooms: '',
    priceFrom: '',
    priceTo: '',
    subwayStation: '',
    neighborhood: '',
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
    updateSubwayStation(state, action) {
      state.subwayStation = action.payload;
    },
    updateNeighborhood(state, action) {
      state.neighborhood = action.payload;
    },
  }
})

export const { updateAmountRooms, updatePriceFrom, updatePriceTo, updateSubwayStation, updateNeighborhood } = filtersSlice.actions;

export default filtersSlice.reducer;