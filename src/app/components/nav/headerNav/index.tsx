import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Settings, Github, Person, LogOut } from 'lib/icons';
import { ThemeToggle } from '../../ThemeToggle';
import { NameAndLogo } from 'lib/components';
import { UserContext } from 'lib/hooks';
import { AuthenticationService } from 'lib/services';
import { NotificationBell } from 'lib/components';
import { Avatar, Header, Inner, Left, Right, DropDownItem, Line, UserDropDown } from './style';

export const HeaderNav: React.FC<{}> = () => {
  const { userData } = React.useContext(UserContext);
  // TODO: transform to localstorage hook, which automatically updates the state when the local storage changes
  //const _localStorage = new LocalStorageService();
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const _authenticationService = new AuthenticationService();

  return (
    <Header>
      <Inner>
        <Left>
          <div className="bantr">
            <NameAndLogo to="/csgo" />
          </div>
          <ThemeToggle />
        </Left>
        <Right>
          <NotificationBell />
          <a className="icon-container" href="https://github.com/bantr" rel="noopener noreferrer" target="_blank">
            <Github
              pointer
            />
          </a>
          <Link className="icon-container" to="/csgo/settings">
            <Settings
              pointer
            />
          </Link>
          <Avatar
            onClick={(): void => setDropDownVisible(!dropDownVisible)}
            url={userData.steamAvatar}
          >
            <UserDropDown visible={dropDownVisible}>
              <DropDownItem>
                <Person
                  className="dropdown-icon"
                  pointer
                  scale={1.2}
                />
                <Line />
                <Link to="/csgo/profile">Profile</Link>
              </DropDownItem>
              <DropDownItem>
                <div
                  className="inner"
                  onClick={(): void => {
                    _authenticationService.logout();
                  }}>
                  <LogOut
                    className="dropdown-icon"
                    pointer
                    scale={1.2}
                  />
                  Logout
                </div>
              </DropDownItem>
            </UserDropDown>
          </Avatar>
        </Right>
      </Inner>
    </Header>
  );
};
