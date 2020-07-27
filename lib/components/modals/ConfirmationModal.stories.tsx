import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'lib/components';
import { useModal } from 'lib/hooks';
import { ConfirmationModal as ConfirmationModalComponent } from './confirmationModal';

export default {
  component: [ConfirmationModalComponent],
  title: 'Modal'
};

const Container = styled.div`
  width:800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmationModal: React.FC = () => {
  const [ModalWrapper, openModal, closeModal] = useModal();

  function mockAction(): void { }

  return (
    <Container>
      <Button onClick={openModal}>Open confirmation modal</Button>
      <ModalWrapper>
        <ConfirmationModalComponent
          action={mockAction}
          actionText="delete"
          close={closeModal}
          description="I am the confirmations modal description"
          title="I am the title"
        />
      </ModalWrapper>
    </Container>
  );
};
