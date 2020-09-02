import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { Link } from 'react-router-dom';
import { Logo, VersionTag } from 'lib/components';
import { UserContext } from 'lib/context';
import { useOutsideAlerter } from 'lib/hooks';
import { NotificationBell } from './notificationBell';
import { ProfileDropDown } from './profileDropDown';
import { Settings } from './settings';
import { Avatar, Header, Inner, Left, Right } from './style';

// import { LatestMatch } from './latestMatch';
// import { ConnectionsDropDown } from './ConnectionsDropDown';
import { usePopper } from 'react-popper';

export const HeaderNav: React.FC = () => {
  const { userData } = React.useContext(UserContext);
  const [showProfileDropDown, setProfileDropDownVisibility] = React.useState(false);
  // const [showConnectionsDropDown, setConnectionsDropDownVisibility] = React.useState(false);

  const [popperElement, setPopperElement] = React.useState(null);
  const [referenceElement, setReferenceElement] = React.useState(null);

  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      strategy: 'absolute',
      placement: 'bottom-start'
    }
  );

  const containerRef = React.createRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, (): void => {
    setProfileDropDownVisibility(false);
    // setConnectionsDropDownVisibility(false);
  });

  return (
    <Header ref={containerRef}>
      <Inner>
        <Left>
          <Link className="bantr" data-cy="headerNav-home" to="/csgo/dashboard" >
            <Logo />
            Bantr
            <VersionTag />
          </Link>
        </Left>
        <Right>
          {
            /*
              <LatestMatch onClick={() => { setConnectionsDropDownVisibility(!showConnectionsDropDown); }}>
                {showConnectionsDropDown ? <ConnectionsDropDown /> : ''}
            </LatestMatch>
            */
          }
          <NotificationBell data-cy="headerNav-notifications" />
          <Settings />

          <Tooltip
            mouseEnterDelay={.25}
            overlay="Profile"
            placement="bottom"
            trigger="hover"
          >
            <Avatar
              data-cy="headerNav-avatar"
              onClick={(): void => setProfileDropDownVisibility(!showProfileDropDown)}
              ref={setReferenceElement}
              url={userData.steamAvatar}>
            </Avatar>
          </Tooltip>
          {showProfileDropDown ? <div ref={setPopperElement} style={styles.popper} {...attributes.popper} ><ProfileDropDown /></div> : ''}
        </Right>
      </Inner>
    </Header>
  );
};
