import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDetails: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.loginDetails = action.payload;
    },
  },
});

export const { handleLogin } = loginSlice.actions;
export default loginSlice.reducer;
