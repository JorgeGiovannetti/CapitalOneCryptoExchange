import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withAuth from "components/providers/withAuth";
import {
  Container,
  PseudoContainer,
  Content,
  Option,
  Header,
  AddressIcon,
  BusinessIcon,
  SecurityIcon,
  ExitIcon
} from "./elements";

class ProfileMenu extends Component {
  handleLogout = () => {
    document.cookie =
      "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
    document.cookie =
      "userId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
    window.location.reload();
  };

  render() {
    const {
      toggleProfileMenu,
      auth: {
        user: { username, firstName }
      },
      show
    } = this.props;
    return (
      <Container show={show}>
        <PseudoContainer onClick={toggleProfileMenu}>
          <Content>
            <Header>HOLA {firstName.toUpperCase()}</Header>
            <Link to={`/@${username}/addresses`}>
              <Option>
                <AddressIcon />
                Mis direcciones
              </Option>
            </Link>
            <Link to={`/@${username}/organizations`}>
              <Option>
                <BusinessIcon />
                Mis organizaciones
              </Option>
            </Link>
            <Link to={`/@${username}/security`}>
              <Option>
                <SecurityIcon />
                Seguridad
              </Option>
            </Link>
            <Option onClick={this.handleLogout}>
              <ExitIcon />
              Log out
            </Option>
          </Content>
        </PseudoContainer>
      </Container>
    );
  }
}

ProfileMenu.propTypes = {
  toggleProfileMenu: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};

export default withAuth(ProfileMenu);
