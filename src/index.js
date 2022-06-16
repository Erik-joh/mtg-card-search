import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import configureStore from "./store/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import * as initialState from "./reducers/initialState";

const store = configureStore(initialState);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Router>
  </React.StrictMode>
);
