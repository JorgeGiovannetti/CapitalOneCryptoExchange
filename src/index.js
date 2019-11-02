import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BlockdemyUIProvider from "./theme/index";

ReactDOM.render(
  <BlockdemyUIProvider>
    <App />
  </BlockdemyUIProvider>,
  document.getElementById("root")
);
