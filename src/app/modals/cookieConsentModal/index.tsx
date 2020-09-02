import * as React from 'react';
import { Title, Button } from 'lib/components';
import { Container, Inner, TitleContainer, Message, ButtonContainer } from './style';
import { Plus } from 'lib/icons';

interface IProps {
  close: () => void;
}

export const CookieConsentModal = React.forwardRef<HTMLDivElement, IProps>(({ close }, ref) => (
  <Container ref={ref}>
    <Inner>
      <TitleContainer>
        <Title size="massive">Cookie Talk</Title>
        <Plus highlight onClick={close} rotate={45} scale={1.2} />
      </TitleContainer>
      <Message>
        We use cookies to enhance your browsing experience, analyze site traffic and improve performance. By continuing to browse or closing this banner, you consent to our use of cookies. Read more about how we use cookies and how you can control them by clicking &quot;learn more&quot;
      </Message>
      <ButtonContainer>
        <Button to="/privacy-policy" variant="outline">Learn more</Button>
        <Button onClick={close} variant="default">Accept cookies</Button>
      </ButtonContainer>
    </Inner>
  </Container>
));
