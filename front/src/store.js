// Import des bibliothèques nécessaires
import { configureStore, createSlice } from '@reduxjs/toolkit'; // Importe configureStore et createSlice depuis Redux Toolkit
import { persistReducer, persistStore } from 'redux-persist'; // Importe les utilitaires de persistance depuis redux-persist
import storage from 'redux-persist/lib/storage'; // Importe le module de stockage pour la persistance
import thunk from 'redux-thunk'; // Importe redux-thunk pour les actions asynchrones

// Configuration de la persistance du store
const persistConfig = {
  key: 'root', // Clé pour la persistance du store
  storage, // Stockage utilisé (dans ce cas, localStorage)
}

// État initial pour la gestion de l'authentification
const initialState = {
  token: "", // État initial du token d'authentification
};

// Définir le type d'action
export const LOGOUT = 'LOGOUT';

// Définir l'action creator pour la déconnexion
export const logout = () => ({
  type: LOGOUT
});

// Créer une "slice" pour la gestion de l'authentification
export const authSlice = createSlice({
  name: 'auth', // Nom de la slice
  initialState, // État initial
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload; // Reducer pour définir le token d'authentification
    },
    clearToken: (state) => {
      state.token = null; // Reducer pour effacer le token d'authentification
    },
    [LOGOUT]: (state) => {
      state.token = null; // Reducer pour gérer la déconnexion en utilisant le type LOGOUT
    }
  },
});

const persistedReducer = persistReducer(persistConfig, authSlice.reducer); // Crée un réducteur persistant avec la configuration

// Exporter les créateurs d'actions
export const { setToken, clearToken } = authSlice.actions;

// Configurer le store Redux
export const store = configureStore({
  reducer: persistedReducer, // Utilisation du réducteur persistant
  devTools: process.env.NODE_ENV !== 'production', // Activation des outils de développement en dehors de la production
  middleware: [thunk] // Utilisation de middleware, ici redux-thunk pour les actions asynchrones
});

// Créer un persistor pour la persistance du store
export const persistor = persistStore(store);
