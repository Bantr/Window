import * as React from 'react';
import { Title } from 'lib/components';
import { Container, Nav, StyledLink } from './style';

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
