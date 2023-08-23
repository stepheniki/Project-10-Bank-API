import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const initialState = {
      token: "",
             };

// Définir le type d'action
export const LOGOUT = 'LOGOUT';

// Définir l'action creator
export const logout = () => ({
  type: LOGOUT
});

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
   // Ajouter un cas pour l'action LOGOUT
   [LOGOUT]: (state) => {
    state.token = null;
  }
},
});

/* const reducer = combineReducers({
    isLoggedIn: login_reducer,
    token: auth,
    firstName: firstName_reducer,
    lastName: lastName_reducer,
    });*/

const persistedReducer = persistReducer(persistConfig, authSlice.reducer) // authSlice.reducer modifier en reducer

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)

