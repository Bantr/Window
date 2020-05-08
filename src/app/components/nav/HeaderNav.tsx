import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Settings, Github, Person, LogOut } from 'lib/icons';
import { ThemeToggle } from '../ThemeToggle';
import { NameAndLogo } from 'lib/components';
import { UserContext } from 'lib/hooks';
import { AuthenticationService } from 'lib/services';
import { NotificationBell } from 'lib/components';

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }): string => theme.pb};
  box-shadow: -2px 14px 11px 0 ${({ theme }): string => (theme.dark ? `${theme.sb}CC` : `${theme.sb}77`)}; /* sb + 80% opacity (CC) */
  z-index: 1;
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 50px 25px 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  .bantr {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    margin-right: 25px;
  }
`;
const Right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .icon-container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 10px;
    transition: transform .2s ease-in-out;
    &:hover{
         transform: translateY(-5px);
      }
    }
`;

const Avatar = styled.div<{ url: string }>`
  position: relative;
  width: 40px;
  height: 40px;
  background-image: url(${({ url }): string => url ? url : 'none'});
  background-position: center;
  background-size: cover;
  margin: 0 10px 0 25px;
  border-radius: 50%;
  cursor: pointer;

  &.placeholder {
    border-radius: 50%;
  }
`;

type UserDropDownProps = {
  visible: boolean;
}

const UserDropDown = styled.nav<UserDropDownProps>`
  position: absolute;
  top: 70px;
  left: -100px;
  right: 0;
  margin: 0 auto;
  width: calc(150px - 10px);
  background-color: ${({ theme }): string => theme.pb};
  height: 100px;
  transition: 0.15s transform ease-in-out;
  border-radius: 5px;
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  box-shadow: 0 12px 11px ${({ theme }): string => theme.shadow}4D, 0 19px 4px ${({ theme }): string => theme.shadow}38;
  opacity: ${({ visible }): number => (visible ? 1 : 0)};
  visibility: ${({ visible }): string => (visible ? 'visible' : 'hidden')};
  transform: ${({ visible }): string => (visible ? 'translateY(0px)' : 'translateY(15px)')};
`;

const DropDownItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 30px;
  margin: 10px 0;
  align-items: center;

  .inner {
    display: flex;
    align-items: center;
  }

  .dropdown-icon {
    margin-right: 10px;
  }
`;

const Line = styled.div`
  content: '';
  position: absolute;
  left: -13px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 25px;
  width: 6px;
  border-radius: 2px;
  background-color: ${({ theme }): string => theme.p};
`;

export const HeaderNav: React.FC<{}> = () => {
  const { userData } = React.useContext(UserContext);

  const [dropDownVisible, setDropDownVisible] = useState(false);
  const _authenticationService = new AuthenticationService();

  return (
    <Header>
      <Inner>
        <Left>
          <div className="bantr">
            <NameAndLogo />
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
