import React, { Component } from "react";
import Layout from "components/layout";
import MainContainer from "./elements";
import Aside from "./components/aside";

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <MainContainer>
          <Aside />
          <p>hola</p>
        </MainContainer>
      </Layout>
    );
  }
}

export default Dashboard;
