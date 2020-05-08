import * as React from 'react';
import { Button, Title } from 'lib/components';
import { Container, ButtonContainer } from './style';

interface IProps {
  close: () => void;
  disconnect: () => void;
  platformName: string;
  ref: any;
}

export const DisconnectPlatformModal: React.FC<IProps> = React.forwardRef<HTMLDivElement, IProps>(({ close, disconnect, platformName }, ref) => {
  function handleDisconnect(): void {
    disconnect();
    close();
  }
  return (
    <Container ref={ref}>
      <Title align="center" size="huge" type="h2">
        Disconnect {platformName}?
      </Title>
      <ButtonContainer>
        <Button onClick={handleDisconnect}>Disconnect</Button>
        <Button onClick={close}>Cancel</Button>
      </ButtonContainer>
    </Container>
  );
});
