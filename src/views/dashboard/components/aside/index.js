import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container } from "./elements";

class Aside extends Component {
  render() {
    return (
      <Container>
        <p>hola</p>
      </Container>
    );
  }
}

export default withRouter(Aside);
