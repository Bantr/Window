import * as React from 'react';
import { routingService } from 'lib/services';
import { bantrSettings } from 'lib/settings';

import {
  Container,
  HeroTitle,
  HeroLead,
  StyledButton,
  WindowContainer,
  Window
} from './style';

export const Body: React.FC = () => (
  <Container>
    <HeroTitle>
      Extensive
      <span> ban </span>
      notifications.
    </HeroTitle>
    <HeroLead>Bantr tracks all the players you played with and against.</HeroLead>
    <StyledButton
      onClick={(): void => { routingService.navigateExternal(`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.protocol}//${window.location.hostname}/csgo`); }}
      variant="outline">Sign up here -&gt;</StyledButton>
    <WindowContainer>
      <Window>
      </Window>
    </WindowContainer>
  </Container >
);
