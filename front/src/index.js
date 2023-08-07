import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Routes from "./routes";
import store from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);