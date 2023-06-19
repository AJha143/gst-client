import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDetails: JSON.parse( sessionStorage.getItem("user")) || {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.loginDetails = action.payload;
      console.log(action)
    },
    handleLogout: (state, action) => {
      state.loginDetails = action.payload;
    },
  },
});

export const { handleLogin, handleLogout } = loginSlice.actions;
export default loginSlice.reducer;
