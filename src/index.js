import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import thunk from "redux-thunk";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// const store = createStore(reducer, applyMiddleware(thunk, logger));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
