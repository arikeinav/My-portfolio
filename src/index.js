  
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import { HashRouter as Router } from "react-router-dom";
import "./styles/global.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

