import React from 'react';
import { SideNavLink, ExternalSideNavLink } from './sideNavLink';
import { Link } from '@reach/router';
import { ArrowBig, Dashboard, Discord, Github, Heart, People, Tracker } from 'lib/icons';
import { Collapse, CollapseIconContainer, ComingSoon, Container, PrivacyContainer } from './style';
import { useLocalStorage } from 'lib/hooks';

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
  const [collapsed, setCollapsed] = useLocalStorage('sidenav-collapsed', false);
  return (
    <Container collapsed={collapsed}>
      <div>
        {links.map(({ icon, text, to, comingSoon = false }) => (
          <React.Fragment key={to}>
            {comingSoon ? <ComingSoon>Coming soon!</ComingSoon> : ''}
            <SideNavLink collapsed={collapsed} icon={icon} text={text} to={to} />
          </React.Fragment>
        ))}
        <Collapse onClick={(): void => setCollapsed(!collapsed)}>
          <CollapseIconContainer collapsed={collapsed}>
            <ArrowBig fill="white" pointer rotate={collapsed ? 0 : 180} />
          </CollapseIconContainer>
        </Collapse>
      </div>
      <div>
        {socialLinks.map((link) => (
          <ExternalSideNavLink collapsed={collapsed} external key={link.to} {...link} />
        ))
        }
        <PrivacyContainer collapsed={collapsed}>
          <Link to="/privacy">privacy</Link>
          <Link to="/terms-of-use">terms of use</Link>
        </PrivacyContainer>
      </div>
    </Container>
  );
};
