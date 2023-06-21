import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const Router =
  process.env.NODE_ENV === "development" ? BrowserRouter : HashRouter;

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/application">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
