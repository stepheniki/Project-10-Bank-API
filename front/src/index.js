import React from "react";
import { createRoot } from "react-dom/client"; // Utilisez directement le chemin complet
import { Provider } from 'react-redux';
import Routes from "./routes";
import {store, persistor} from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {PersistGate} from 'redux-persist/integration/react';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
