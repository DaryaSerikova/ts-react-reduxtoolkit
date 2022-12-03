import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type TFlat = {
  type_card: string,
  key: string,
  gold: boolean,
  price: number,
  duration: string,
  // people: "",
  amount_rooms: number,
  square?: number,
  city: string,
  address: string,
  subway_station: string,
  neighborhood: string,
}

type TFlats = {
  all: TFlat[];
  filtered: TFlat[];
}

const initialState: TFlats = {
  all: [],
  filtered: []
}

const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    updateAllFlats(state, action: PayloadAction<TFlat[]>) {
      state.all = action.payload;
    },
    updateFilteredFlats(state, action: PayloadAction<TFlat[]>) {
      state.filtered = action.payload;
    },
  }
})

export const { updateAllFlats, updateFilteredFlats } = flatsSlice.actions;

export default flatsSlice.reducer;