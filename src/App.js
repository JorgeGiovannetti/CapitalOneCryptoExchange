import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Box from "blockdemy-ui/box";
import withUser from "components/providers/withUser";
import Login from "./views/login";
import Dashboard from "./views/dashboard";

const App = ({ user: { userId } }) => (
  <Box>
    {!userId && (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    )}
    {userId && (
      <Switch>
        <Route path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    )}
  </Box>
);

export default withUser(App);
