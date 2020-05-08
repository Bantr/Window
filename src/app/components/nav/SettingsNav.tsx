import * as React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Title } from 'lib/components';

const Container = styled.div`
  width: calc(320px - 25px);
  height: calc(100% - 25px);
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  padding: 25px 0 0 35px;
  margin-right: 50px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const StyledLink = styled(Link) <{ isCurrent?: boolean }>`
  font-weight: 500;
  font-size: 1rem;
  margin: 5px 0;
  color: ${({ theme }): string => theme.t};

  &:hover {
    opacity: 0.7;
  }
`;

export const SettingsNav: React.FC<{}> = () => (
  <Container>
    <Title align="left" size="massive" type="h2">Settings</Title>
    <Nav>
      <StyledLink to="/csgo/settings/connections">Connections</StyledLink>
      <StyledLink to="/csgo/settings/notifications">Notifications</StyledLink>
      <StyledLink to="/csgo/settings/appearance">Appearance</StyledLink>
    </Nav>
  </Container>
);
