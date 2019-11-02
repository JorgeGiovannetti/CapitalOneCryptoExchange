import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BlockdemyUIProvider } from "./theme/index";

ReactDOM.render(
  <Router basename="/">
    <BlockdemyUIProvider>
      <App />
    </BlockdemyUIProvider>
  </Router>,
  document.getElementById("root")
);
