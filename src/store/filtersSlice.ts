import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type TFilters = {
  city: string;
  amountRooms: string;
  priceFrom: string;
  priceTo: string;
  subwayStation: string;
  neighborhood: string;
}

const initialState: TFilters = {
  city: '',
  amountRooms: '',
  priceFrom: '',
  priceTo: '',
  subwayStation: '',
  neighborhood: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    updateAmountRooms(state, action: PayloadAction<string>) {
      state.amountRooms = action.payload;
    },
    updatePriceFrom(state, action: PayloadAction<string>) {
      state.priceFrom = action.payload;
    },
    updatePriceTo(state, action: PayloadAction<string>) {
      state.priceTo = action.payload;
    },
    updateSubwayStation(state, action: PayloadAction<string>) {
      state.subwayStation = action.payload;
    },
    updateNeighborhood(state, action: PayloadAction<string>) {
      state.neighborhood = action.payload;
    },
  }
})

export const { updateAmountRooms, updatePriceFrom, updatePriceTo, updateSubwayStation, updateNeighborhood, updateCity } = filtersSlice.actions;

export default filtersSlice.reducer;