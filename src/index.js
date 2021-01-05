import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { ToggleProvider } from "./context/toggleContext";
import { ProductsProvider } from "./context/productsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
