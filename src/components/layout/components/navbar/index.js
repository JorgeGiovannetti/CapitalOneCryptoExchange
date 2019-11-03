import React, { Component, Fragment } from "react";
import RoundMenu from "react-md-icon/dist/RoundMenu";
import {
  Content,
  MenuButton,
  LogoContainer,
  Logo,
  Container
} from "./elements";
import ProfileData from "./components/profile-data";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <LogoContainer>
            <Logo alt="Capital One" src="/static/images/brand/logo-black.svg" />
          </LogoContainer>
          <Content>
            <ProfileData shrink />
            <MenuButton onClick={this.toggleModal}>
              <RoundMenu />
            </MenuButton>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

export default Navbar;
