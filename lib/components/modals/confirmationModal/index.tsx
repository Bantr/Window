import * as React from 'react';
import { Container, ActionContainer, Description, Cancel, Header } from './style';
import { Button, Title } from 'lib/components';
import { Plus } from 'lib/icons';

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
    <Header>
      <Title>{title}</Title>
      <Plus onClick={close} pointer rotate={45} />
    </Header>
    <Description>{description}</Description>
    <ActionContainer>
      <Cancel onClick={close}>Cancel</Cancel>
      <Button color="primary" icon={actionIcon} onClick={action} >{actionText}</Button>
    </ActionContainer>
  </Container>
));
