import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withAuth from 'components/providers/withAuth';
import Menu from './components/profile-menu';
import { Profile, Name, Text, DownIcon, Break, Divider, Avatar } from './elements';

class ProfileData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => this.setState(({ showMenu }) => ({ showMenu: !showMenu }));

  render() {
    const {
      auth: { user },
      shrink
    } = this.props;
    const { showMenu } = this.state;
    return (
      <Fragment>
        {user && (
          <Fragment>
            <Divider />
            <Profile onClick={this.toggleMenu}>
              <Avatar
                size="36"
                src={(user && user.profileImg) || '/static/images/general/avatar.png'}
              />
              <Text>
                Bienvenido,
                <Break />
                <Name>{user && `${user.firstName} ${user.lastName}`}</Name>
              </Text>
              <DownIcon />
            </Profile>
            <Menu shrink={shrink} show={showMenu} toggleProfileMenu={this.toggleMenu} />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

ProfileData.propTypes = {
  auth: PropTypes.object.isRequired,
  shrink: PropTypes.bool.isRequired
};

export default withAuth(ProfileData);
