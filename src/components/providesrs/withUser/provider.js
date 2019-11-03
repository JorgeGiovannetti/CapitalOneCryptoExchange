import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApollo } from "./node_modules/react-apollo";

export const withUserContext = React.createContext(null);

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      user: {},
      accounts: []
    };
  }

  componentDidMount = async () => {
    this.setState({
      userId: localStorage.getItem("userId")
    });
  };

  render() {
    const { children } = this.props;
    return (
      <withUserContext.Provider value={this.state}>
        {children}
      </withUserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.any.isRequired,
  client: PropTypes.object.isRequired
};

export default withApollo(UserProvider);
