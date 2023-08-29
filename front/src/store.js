// Import des bibliothèques nécessaires
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// Configuration de la persistance du store
const persistConfig = {
  key: 'root',
  storage,
}

// État initial pour la gestion de l'authentification
const initialState = {
  token: "",
};

// Définir le type d'action
export const LOGOUT = 'LOGOUT';

// Définir l'action creator
export const logout = () => ({
  type: LOGOUT
});

// Créer une "slice" pour la gestion de l'authentification
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
    [LOGOUT]: (state) => {
      state.token = null;
    }
  },
});

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

// Exporter les créateurs d'actions
export const { setToken, clearToken } = authSlice.actions;

// Configurer le store Redux
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

// Créer un persistor pour la persistance du store
export const persistor = persistStore(store);
