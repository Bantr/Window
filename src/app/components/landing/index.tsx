import * as React from 'react';
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
    <StyledButton variant="outline">Signup here -&gt;</StyledButton>
    <WindowContainer>
      <Window>
      </Window>
    </WindowContainer>
  </Container>
);
