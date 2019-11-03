import React, { Component } from "react";
import Typography from "blockdemy-ui/typography";
import { Card, CardBody } from "blockdemy-ui/card";
import Button from "blockdemy-ui/button";
import Box from "blockdemy-ui/box";
import { Header } from "./elements";
import Input from "blockdemy-ui/input";
// import { capApi } from "../../utils/api/axios";
// import { capitalOne_key } from "../../utils/config";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: ""
    };
  }

  handleInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    const { userId } = this.state;
    localStorage.setItem("userId", userId);
    window.location.reload();
  };

  render() {
    const { userId, password } = this.state;
    return (
      <Box alignItems="center" display="flex" flexDirection="column" p={30}>
        <Card>
          <Header>
            <Typography variant="h3" color="dark">
              Log In to Your Account
            </Typography>
          </Header>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            p={30}
            width={1}
          >
            <CardBody>
              <form onSubmit={this.handleSubmit}>
                <Input
                  label="User ID"
                  my={10}
                  onChange={this.handleInputChange}
                  name="userId"
                  placeholder="User ID"
                  value={userId}
                />
                <Input
                  label="Password"
                  my={10}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                  value={password}
                  type="password"
                />
                <Button mt={20} fullWidth color="secondary" variant="soft">
                  Login
                </Button>
              </form>
            </CardBody>
          </Box>
        </Card>
      </Box>
    );
  }
}

export default Login;
