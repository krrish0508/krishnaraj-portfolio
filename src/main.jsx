import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/krishnaraj-portfolio">
      <Portfolio />
    </BrowserRouter>
  </React.StrictMode>
);
