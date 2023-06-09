import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
   toggleSpinner: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {toggleSpinner} = spinnerSlice.actions;
export default spinnerSlice.reducer;