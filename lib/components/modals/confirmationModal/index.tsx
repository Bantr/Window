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
  icon?: React.ReactNode;
  close: () => void;
  ref: React.MutableRefObject<HTMLDivElement>;
}

export const ConfirmationModal = React.forwardRef<HTMLDivElement, IProps>(({
  icon = null,
  title,
  description,
  action,
  actionText,
  actionIcon,
  close
}, ref) => {
  function confirmAction(): void {
    action();
    close();
  }

  return (
    <Container
      aria-describedby={description}
      aria-labelledby={title}
      ref={ref}
    >
      <Header>
        <Title size="large">{icon} {title}</Title>
        <Plus onClick={close} pointer rotate={45} />
      </Header>
      <Description>{description}</Description>
      <ActionContainer>
        <Cancel onClick={close}>Cancel</Cancel>
        <Button color="primary" icon={actionIcon} onClick={confirmAction} >{actionText}</Button>
      </ActionContainer>
    </Container>
  );
});
