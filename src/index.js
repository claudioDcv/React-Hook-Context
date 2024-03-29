import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { StoreProvider } from "./context/StoreContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);
