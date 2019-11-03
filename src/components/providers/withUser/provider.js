import React, { Component } from "react";
import PropTypes from "prop-types";
import { capApi } from "../../../utils/api/axios";
import { capitalOne_key } from "../../../utils/config";

export const withUserContext = React.createContext({});

class UserProvider extends Component {
  constructor(props) {
    super(props);
    console.log("ok");
    this.state = {
      userId: null,
      first_name: "",
      last_name: "",
      address: {},
      accounts: []
    };
  }

  componentDidMount = async () => {
    await this.setState({
      userId: localStorage.getItem("userId")
    });
    if (localStorage.getItem("userId")) this.getUserData();
  };

  getAccounts = async () => {
    const { userId } = this.state;
    const { data } = await capApi.get(
      `/customers/${userId}/accounts?key=${capitalOne_key}`
    );
    this.setState({ accounts: data });
  };

  getUserData = async () => {
    const { userId } = this.state;
    const { data: { first_name, last_name } } = await capApi.get(
      `/customers/${userId}?key=${capitalOne_key}`
    );
    this.setState({ first_name, last_name });
  };

  render() {
    const { children } = this.props;
    const { userId, first_name, last_name, address, accounts } = this.state;
    return (
      <withUserContext.Provider
        value={{
          userId,
          first_name,
          last_name,
          address,
          accounts,
          getAccounts: this.getAccounts
        }}
      >
        {children}
      </withUserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.any.isRequired
};

export default UserProvider;
