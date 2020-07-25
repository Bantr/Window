import * as React from 'react';
import { Container, ActionContainer, Description, Cancel } from './style';
import { Button, Title } from 'lib/components';

interface IProps {
  title: string;
  description?: string;
  action: () => void;
  actionName: string;
  close: () => void;
  ref: React.MutableRefObject<HTMLDivElement>;
}

export const ConfirmationModal = React.forwardRef<HTMLDivElement, IProps>(({ title, description, action, actionName, close }, ref) => (
  <Container
    aria-describedby={description}
    aria-labelledby={title}
    ref={ref}
  >
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ActionContainer>
      <Cancel onClick={close}>Cancel</Cancel>
      <Button onClick={action} variant="text">{actionName}</Button>
    </ActionContainer>
  </Container>
));
