import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LocalStorageService } from 'lib/services';
import { SideNavLink, ExternalSideNavLink } from './SideNavLink';
import { Link } from '@reach/router';

// TODO: sort imports
import { Dashboard, Tracker, People, ArrowBig, Discord, Github, Heart } from 'lib/icons';

const openAnimation = keyframes`
  0% {
    transform: translateX(0)
  }
  50% {
    transform: translateX(-3px)
  }
  100% {
    transform: translateX(0);
  }
`;
const CollapsedAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
  100%{
    transform: translateX(0);
  }
`;

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
    to: 'https://discord.gg/nHXkMdh'
  },
  {
    text: 'Status',
    icon: <Heart outline={false} pointer />,
    to: 'https://status.bantr.app'
  }
];

const Container = styled.div<{ isCollapsed: boolean }>`
  position: relative;
  height: calc(100vh - 145px);
  width: ${({ isCollapsed }): string => (isCollapsed ? '50px' : '200px')};
  min-width: ${({ isCollapsed }): string => (isCollapsed ? '50px' : '200px')};
  background-color: ${({ theme }): string => theme.pb};
  padding: 50px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease-in-out, min-width 0.3s ease-in-out;
  z-index: 2; /* elements like coming soon should show above the main view components */
`;

const Collapse = styled.div`
  position: absolute;
  margin: auto 0;
  right: -20px;
  width: 25px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }): string => theme.p};
  top: 0;
  bottom: 0;
  z-index: 50;
`;

const CollapseIconContainer = styled.div<{ isCollapsed }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    animation: ${({ isCollapsed }): any => (isCollapsed ? CollapsedAnimation : openAnimation)} 0.5s infinite;
  }
`;

const ComingSoon = styled.div`
  position:absolute;
  right: -90px;
  padding: 5px 10px;
  background-color: ${({ theme }): string => theme.s};
  border-radius: 5px;
  font-weight: 800;
  font-size: 10px;
  text-transform: uppercase;
  color: white;
`;

const PrivacyContainer = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  width: ${({ isCollapsed }): string => isCollapsed ? '0px' : '200px'};
  overflow: hidden;
  white-space: nowrap;
  justify-content: space-between;
  transition: ${({ isCollapsed }): string => isCollapsed ? 'none' : 'width 0.3s ease-in-out'};
  font-size: 12px;
  margin-top: 20px;
`;

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
