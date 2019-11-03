import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withUser from 'components/providers/withUser';
import {
  Container,
  PseudoContainer,
  Content,
  Option,
  Header,
  ExitIcon,
  UserIcon
} from './elements';

class ProfileMenu extends Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
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
            <Header>{first_name.toUpperCase()} {last_name.toUpperCase()}</Header>
            <Link to={`/@${userId}/profile`}>
              <Option>
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

ProfileMenu.propTypes = {
  toggleProfileMenu: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};

export default withUser(ProfileMenu);
