import React, { Component } from "react";
import Typography from "blockdemy-ui/typography";
import { Card, CardBody, CardFooter } from "blockdemy-ui/card";
import Button from "blockdemy-ui/button";
import Box from "blockdemy-ui/box";
import { Header } from "./elements";
import Input from "blockdemy-ui/input";
import { capApi } from "../../utils/api/axios";
import { capitalOne_key } from "../../utils/config";

class Login extends Component {


  // componentDidMount() {
  //   capApi.get(`/customers?key=${capitalOne_key}`)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //       console.log("Get done.");
  //     });
  // }

  render() {
    return <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      p={30}
    >
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
            <Input
              align="left"
              className=""
              error={false}
              id={null}
              label="User ID"
              leftIcon=""
              message=""
              my={30}
              onChange={function noRefCheck() { }}
              placeholder="User ID"
              prefix=""
              success={false}
              value=""
              warning={false}
            />
            <Input
              align="left"
              className=""
              error={false}
              id={null}
              label="Password"
              leftIcon=""
              message=""
              my={30}
              onChange={function noRefCheck() { }}
              placeholder="Password"
              prefix=""
              success={false}
              value=""
              warning={false}
            />

          </CardBody>
        </Box>
        <CardFooter>
          <Button
            color="primary"
            disabled={false}
            fullWidth={false}
            ml="auto"
          >
            Log In
        </Button>
        </CardFooter>
      </Card>
    </Box >;
  }
}

export default Login;
