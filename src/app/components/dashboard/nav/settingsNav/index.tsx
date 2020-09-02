import * as React from 'react';
import { Title } from 'lib/components';
import { Container, Nav, Link } from './style';

export const SettingsNav: React.FC = () => (
  <Container data-cy="settingsNav">
    <Title align="left" size="huge" type="h2">Settings</Title>
    <Nav>
      <Link activeClassName="active" data-cy="settingsNav-connections" to="/csgo/settings/connections">Connections</Link>
      <Link activeClassName="active" data-cy="settingsNav-notifications" to="/csgo/settings/notifications">Notifications</Link>
      <Link activeClassName="active" data-cy="settingsNav-appearance" to="/csgo/settings/appearance">Appearance</Link>
    </Nav>
  </Container>
);
