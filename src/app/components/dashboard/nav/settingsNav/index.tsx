import * as React from 'react';
import { Title } from 'lib/components';
import { Container, Nav, StyledLink } from './style';

export const SettingsNav: React.FC = () => (
  <Container data-cy="settingsNav">
    <Title align="left" size="massive" type="h2">Settings</Title>
    <Nav>
      <StyledLink data-cy="settingsNav-connections" to="/csgo/settings/connections">Connections</StyledLink>
      <StyledLink data-cy="settingsNav-notifications" to="/csgo/settings/notifications">Notifications</StyledLink>
      <StyledLink data-cy="settingsNav-appearance" to="/csgo/settings/appearance">Appearance</StyledLink>
    </Nav>
  </Container>
);
