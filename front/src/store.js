import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Importez le réducteur d'authentification

const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});

export default store;