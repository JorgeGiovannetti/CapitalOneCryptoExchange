import React from "react";
import { Switch, Route } from "react-router-dom";
import Box from "blockdemy-ui/box";
import Login from "./views/login";
import Dashboard from "./views/dashboard";

const App = () => (
  <Box>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
      <Dashboard />
    </Switch>
  </Box>
);

export default App;
