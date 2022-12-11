import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type TFlat = {
  // type_card: string,
  id?: number; /// data_2
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

type TAmount = {
  ["minsk"]: number,
  ["vitebsk"]: number,
  ["grodno"]: number,
  ["gomel"]: number,
  ["brest"]: number,
  ["mogilev"]: number,
}

type TMenuTextList = { 
  name: string; 
  label: string; 
  amount: number;
}


type TFlats = {
  all: TFlat[];
  filtered: TFlat[];
  amount: TAmount;
  menu_text_list: TMenuTextList[];
}

const initialState: TFlats = {
  all: [],
  filtered: [],
  amount: {
    ["minsk"]: 0,
    ["vitebsk"]: 0,
    ["grodno"]: 0,
    ["gomel"]: 0,
    ["brest"]: 0,
    ["mogilev"]: 0,
  },

  menu_text_list: [
    { name: "minsk", label: "Минске", amount: 1 },
    { name: "vitebsk", label: "Витебске", amount: 2 },
    { name: "grodno", label: "Гродно", amount: 3 },
    { name: "gomel", label: "Гомеле", amount: 4 },
    { name: "brest", label: "Бресте", amount: 5 },
    { name: "mogilev", label: "Могилеве", amount: 6 },
  ]
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
    updateAmountFlatsMinsk(state, action: PayloadAction<number>) {
      state.amount["minsk"] = action.payload;
    },
    updateAmountFlatsVitebsk(state, action: PayloadAction<number>) {
      state.amount["vitebsk"] = action.payload;
    },
    updateAmountFlatsGrodno(state, action: PayloadAction<number>) {
      state.amount["grodno"] = action.payload;
    },
    updateAmountFlatsGomel(state, action: PayloadAction<number>) {
      state.amount["gomel"] = action.payload;
    },
    updateAmountFlatsBrest(state, action: PayloadAction<number>) {
      state.amount["brest"] = action.payload;
    },
    updateAmountFlatsMogilev(state, action: PayloadAction<number>) {
      state.amount["mogilev"] = action.payload;
    },
  }
})

export const { updateAllFlats, updateFilteredFlats, updateAmountFlatsMinsk } = flatsSlice.actions;

export default flatsSlice.reducer;