import React, { Component } from "react";
import { Link } from "react-router-dom";
import withUser from "components/providers/withUser";
import {
  Container,
  PseudoContainer,
  Content,
  Option,
  Header,
  ExitIcon,
  UserIcon
} from "./elements";

class ProfileMenu extends Component {
  handleLogout = () => {
    console.log("out");
    localStorage.clear();
    window.location.reload();
  };

  myProfile = userId => {
    console.log(userId);
  };

  render() {
    const {
      toggleProfileMenu,
      user: { userId, first_name, last_name },
      show
    } = this.props;
    return (
      <Container show={show}>
        <PseudoContainer onClick={toggleProfileMenu}>
          <Content>
            <Header>
              {first_name.toUpperCase()} {last_name.toUpperCase()}
            </Header>
            <Link to={`/@${userId}/profile`}>
              <Option onClick={this.myProfile(userId)}>
                <UserIcon />
                My Profile
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

export default withUser(ProfileMenu);
