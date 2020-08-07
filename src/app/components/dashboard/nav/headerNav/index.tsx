import * as React from 'react';
import { Link } from '@reach/router';
import { Github } from 'lib/icons';
import { Logo } from 'lib/components';
import { UserContext } from 'lib/context';
import { useOutsideAlerter } from 'lib/hooks';
import { NotificationBell } from './notificationBell';
import { UserNav } from '../userNav';
import { Settings } from './settings';
import { Avatar, Header, Inner, Left, Right } from './style';
import Tooltip from 'rc-tooltip';

export const HeaderNav: React.FC = () => {
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
          <Tooltip
            overlay="Github"
            placement="bottom"
            trigger="hover"
          >
            <a className="icon-container" data-cy="headerNav-github" href="https://github.com/bantr" rel="noopener noreferrer" target="_blank">
              <Github pointer />
            </a>
          </Tooltip>
          <Settings />
          <Tooltip
            overlay="Profile"
            placement="bottom"
            trigger="hover"
          >
            <Avatar
              data-cy="headerNav-avatar"
              onClick={(): void => setDropDownVisible(!dropDownVisible)}
              url={userData.steamAvatar}>
              {dropDownVisible ? <UserNav /> : ''}
            </Avatar>
          </Tooltip>
        </Right>
      </Inner>
    </Header>
  );
};
