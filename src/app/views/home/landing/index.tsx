import * as React from 'react';
import { routingService } from 'lib/services';
import { bantrSettings } from 'lib/settings';
import appTemp from '../../../assets/images/app-temp.png';

import {
  Container,
  HeroTitle,
  HeroLead,
  StyledButton,
  WindowContainer,
  Window
} from './style';

export const Landing: React.FC = () => (
  <Container>
    <HeroTitle>
      Extensive <span> ban </span> notifications.
    </HeroTitle>
    <HeroLead>Bantr tracks all the players you played with and against.</HeroLead>
    <StyledButton
      onClick={(): void => { routingService.navigateExternal(`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.protocol}//${window.location.hostname}/csgo`); }}
      variant="outline">Sign up here -&gt;</StyledButton>
    <WindowContainer>
      <Window>
        <img alt="Preview app temp" src={appTemp} />
      </Window>
    </WindowContainer>
  </Container >
);
