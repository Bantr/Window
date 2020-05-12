import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Settings, Github } from 'lib/icons';
import { ThemeToggle } from '../../ThemeToggle';
import { Logo } from 'lib/components';
import { UserContext, useOutsideAlerter } from 'lib/hooks';
import { NotificationBell } from 'lib/components';
import { UserNav } from '../userNav';
import { Avatar, Header, Inner, Left, Right } from './style';

export const HeaderNav: React.FC<{}> = () => {
  const { userData } = React.useContext(UserContext);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const containerRef = React.createRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, (): void => { setDropDownVisible(!dropDownVisible); });

  return (
    <Header ref={containerRef}>
      <Inner>
        <Left>
          <div className="bantr">
            <Logo to="/csgo" />
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
            url={userData.steamAvatar}>
            {dropDownVisible ? <UserNav /> : ''}
          </Avatar>
        </Right>
      </Inner>
    </Header>
  );
};
