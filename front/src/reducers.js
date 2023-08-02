import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "signIn",
  initialState: {
    token: "",
  },
  reducers: {
    setSignInData: (state, action) => {
      state.token = action.payload.response.body.token;
    },
  },
});

export const { setSignInData } = userSlice.actions;
export default userSlice.reducer;