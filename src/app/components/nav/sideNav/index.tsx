import React from 'react';
import { LocalStorageService } from 'lib/services';
import { SideNavLink, ExternalSideNavLink } from './sideNavLink';
import { Link } from '@reach/router';
import { ArrowBig, Dashboard, Discord, Github, Heart, People, Tracker } from 'lib/icons';
import { Collapse, CollapseIconContainer, ComingSoon, Container, PrivacyContainer } from './style';

const path = '/csgo';
const links = [
  {
    text: 'Dashboard',
    icon: <Dashboard pointer scale={1.2} />,
    to: `${path}`
  },
  {
    text: 'Tracker',
    icon: <Tracker pointer scale={1.2} />,
    to: `${path}/tracker`
  },
  {
    text: 'Compare',
    icon: <People pointer scale={1.2} />,
    to: `${path}/compare`,
    comingSoon: true
  }
];
// TODO: change link github
const socialLinks = [
  {
    text: 'Github',
    icon: <Github outline={false} pointer />,
    to: 'https://github.com/bantr'
  },
  {
    text: 'Discord',
    icon: <Discord outline={false} pointer />,
    to: 'https://discord.bantr.app'
  },
  {
    text: 'Status',
    icon: <Heart outline={false} pointer />,
    to: 'https://status.bantr.app'
  }
];

export const SideNav: React.FC<{}> = () => {
  const _localStorageService = new LocalStorageService();
  const defaultCollapsedState = _localStorageService.getItem('sidenav-is-collapsed');

  const [isCollapsed, setCollapsed] = React.useState<boolean>(defaultCollapsedState ? defaultCollapsedState : false);

  function setCollapsedState(): void {
    _localStorageService.storeItem('sidenav-is-collapsed', (!isCollapsed).toString());
    setCollapsed(!isCollapsed);
  }

  return (
    <Container isCollapsed={isCollapsed}>
      <div>
        {links.map(({ icon, text, to, comingSoon = false }) => (
          <React.Fragment key={to}>
            {comingSoon ? <ComingSoon>Coming soon!</ComingSoon> : ''}
            <SideNavLink icon={icon} isCollapsed={isCollapsed} text={text} to={to} />
          </React.Fragment>
        ))}
        <Collapse onClick={setCollapsedState}>
          <CollapseIconContainer isCollapsed={isCollapsed}>
            <ArrowBig fill="white" pointer rotate={isCollapsed ? 0 : 180} />
          </CollapseIconContainer>
        </Collapse>
      </div>
      <div>
        {socialLinks.map((link) => (
          <ExternalSideNavLink external isCollapsed={isCollapsed} key={link.to} {...link} />
        ))
        }
        <PrivacyContainer isCollapsed={isCollapsed}>
          <Link to="/privacy">privacy</Link>
          <Link to="/terms-of-use">terms of use</Link>
        </PrivacyContainer>
      </div>
    </Container>
  );
};
