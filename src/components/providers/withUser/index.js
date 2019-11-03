import React from "react";
import { withUserContext } from "./provider";

const withUser = Component => {
  return function WrapperComponent(props) {
    return (
      <withUserContext.Consumer>
        {state => <Component {...props} user={state} />}
      </withUserContext.Consumer>
    );
  };
};

export default withUser;
