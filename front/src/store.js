import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
      token: "",
      // firstname
  };



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  }
});

