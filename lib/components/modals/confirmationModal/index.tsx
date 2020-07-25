import * as React from 'react';
import { Container, ActionContainer, Description, Cancel } from './style';
import { Button, Title } from 'lib/components';

interface IProps {
  title: string;
  description?: string;
  actionIcon?: React.ReactNode;
  action: () => void;
  actionText: string;
  close: () => void;
  ref: React.MutableRefObject<HTMLDivElement>;
}

export const ConfirmationModal = React.forwardRef<HTMLDivElement, IProps>(({ title, description, action, actionText, actionIcon, close }, ref) => (
  <Container
    aria-describedby={description}
    aria-labelledby={title}
    ref={ref}
  >
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ActionContainer>
      <Cancel onClick={close}>Cancel</Cancel>
      <Button icon={actionIcon} onClick={action} variant="text" >{actionText}</Button>
    </ActionContainer>
  </Container>
));
