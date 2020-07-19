import * as React from 'react';
import { Link } from '@reach/router';
import { Settings, Github } from 'lib/icons';
import { Logo } from 'lib/components';
import { UserContext, useOutsideAlerter } from 'lib/hooks';
import { NotificationBell } from 'lib/components';
import { UserNav } from '../userNav';
import { Avatar, Header, Inner, Left, Right } from './style';

export const HeaderNav: React.FC<{}> = () => {
  const { userData } = React.useContext(UserContext);
  const [dropDownVisible, setDropDownVisible] = React.useState(false);

  const containerRef = React.createRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, (): void => { setDropDownVisible(false); });

  return (
    <Header ref={containerRef}>
      <Inner>
        <Left>
          <Link className="bantr" data-cy="headerNav-home" to="/csgo/dashboard" >
            <Logo />
            Bantr
          </Link>
        </Left>
        <Right>
          <NotificationBell data-cy="headerNav-notifications" />
          <a className="icon-container" data-cy="headerNav-github" href="https://github.com/bantr" rel="noopener noreferrer" target="_blank">
            <Github
              pointer
            />
          </a>
          <Link className="icon-container" data-cy="headerNav-settings" to="/csgo/settings">
            <Settings
              pointer
            />
          </Link>
          <Avatar
            data-cy="headerNav-avatar"
            onClick={(): void => setDropDownVisible(!dropDownVisible)}
            url={userData.steamAvatar}>
            {dropDownVisible ? <UserNav /> : ''}
          </Avatar>
        </Right>
      </Inner>
    </Header>
  );
};
