import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserProvider from "components/providers/withUser/provider";
import { BrowserRouter as Router } from "react-router-dom";
import { BlockdemyUIProvider, getTheme } from "./theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <Router basename="/">
    <BlockdemyUIProvider>
      <ThemeProvider theme={getTheme()}>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
    </BlockdemyUIProvider>
  </Router>,
  document.getElementById("root")
);
