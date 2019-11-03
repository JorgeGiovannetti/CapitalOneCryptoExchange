import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withUser from "components/providers/withUser";
import Login from "./views/login";
import Dashboard from "./views/dashboard";

const App = ({ user: { userId, loaded } }) => (
  <Switch>
    {loaded && (
      <Fragment>
        {!userId && <Route path="/login" component={Login} />}
        {userId && <Route path="/" component={Dashboard} />}
        {!userId && <Redirect to="login" />}
        {userId && <Redirect to="/" />}
      </Fragment>
    )}
  </Switch>
);

export default withUser(App);
