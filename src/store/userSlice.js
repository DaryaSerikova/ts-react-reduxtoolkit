import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    access: '',

  },
  reducers: {
    updateAccess(state, action) {
      state.access = action.payload;
    },

  }
})

export const { updateAccess } = userSlice.actions;

export default userSlice.reducer;