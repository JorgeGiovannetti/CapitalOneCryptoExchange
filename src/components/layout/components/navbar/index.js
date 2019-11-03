import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import RoundMenu from "react-md-icon/dist/RoundMenu";
import {
  // Routes,
  Content,
  MenuButton,
  // Button,
  // Route,
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
            <Logo
              alt="Capitol One CryptoExchange"
              src="/static/images/brand/logo-black.svg"
            />
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

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default Navbar;
