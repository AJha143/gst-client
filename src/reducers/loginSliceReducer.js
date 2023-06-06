import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDetails: {
    accessToken:
    "eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqViouTVKyUipOzEtJTS0wsFTSUcosLgaKAMnS1CJdqARQOLWiQMnK0MzC1NLM3NLUBKgusQQqYGIJFsgqyQRqNDQyNlGqBQAAAP__.lyyEsrxWwh9UEavjhOHxnlsL0PNxXMPKAPKgdfWkzQY",
  },
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
