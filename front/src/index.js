// Importations de bibliothèques et de composants nécessaires
import React from "react";
import { createRoot } from "react-dom/client"; // Importe la fonction createRoot de React DOM
import { Provider } from 'react-redux'; // Importe le composant Provider de react-redux
import Routes from "./routes"; // Importe le composant Routes depuis le fichier routes.js
import {store, persistor} from './store'; // Importe le store Redux et le persistor depuis le fichier store.js
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importe une feuille de style CSS
import {PersistGate} from 'redux-persist/integration/react'; // Importe le composant PersistGate de redux-persist

// Crée un élément racine dans le DOM pour l'application React
const root = createRoot(document.getElementById("root"));

// Rend l'application React dans le strict mode
root.render(
  <React.StrictMode>
    {/* Utilise le composant Provider pour fournir le store Redux à l'ensemble de l'application */}
    <Provider store={store}>
      {/* Utilise le composant PersistGate pour gérer la persistance des données */}
      <PersistGate persistor={persistor}>
        {/* Rend le composant Routes, qui gère la navigation de l'application */}
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);