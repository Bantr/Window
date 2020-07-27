import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'lib/components';
import { useModal } from 'lib/hooks';
import { SteamAuthModal as SteamAuthModalComponent } from './index';

export default {
  component: SteamAuthModalComponent,
  title: 'Modal'
};

const Container = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SteamAuthModal: React.FC = () => {
  const [ModalWrapper, openModal, closeModal] = useModal();

  return (
    <Container>
      <Button onClick={openModal}>Open modal</Button>
      <ModalWrapper>
        <SteamAuthModalComponent
          close={closeModal}
        />
      </ModalWrapper>
    </Container>
  );
};
