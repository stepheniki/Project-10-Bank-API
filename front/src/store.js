import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    token: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
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

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  }
});

export default store;
