import { createSlice } from '@reduxjs/toolkit';


type TUser = {
  access: string;
}

const initialState: TUser = {
  access: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAccess(state, action) {
      state.access = action.payload;
    },

  }
})

export const { updateAccess } = userSlice.actions;

export default userSlice.reducer;