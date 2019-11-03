import React, { Component } from "react";
import Layout from "components/layout";
import { MainContainer, Row } from "./elements";
import Aside from "./components/aside";
import { Card, CardBody } from "blockdemy-ui/card";
import Onboarding from "./components/onboarding";
import Prices from "./components/prices";

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <MainContainer>
          <Aside />
          <Row cols="1fr 3fr">
            <Onboarding />
            <Card>
              <CardBody>HOLA</CardBody>
            </Card>
          </Row>
          <Row cols="1fr 1fr">
            <Prices />
            <Card>
              <CardBody>HOLA</CardBody>
            </Card>
          </Row>
        </MainContainer>
      </Layout>
    );
  }
}

export default Dashboard;
