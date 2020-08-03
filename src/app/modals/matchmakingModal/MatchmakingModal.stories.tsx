import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'lib/components';
import { useModal } from 'lib/hooks';
import { MatchmakingModal as MatchmakingModalComponent } from '.';

export default {
  component: MatchmakingModalComponent,
  title: 'Modal'
};

const Container = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatchMakingModal: React.FC = () => {
  const [ModalWrapper, openModal, closeModal] = useModal();

  return (
    <Container>
      <Button onClick={openModal}>Open modal</Button>
      <ModalWrapper>
        <MatchmakingModalComponent
          close={closeModal}
        />
      </ModalWrapper>
    </Container>
  );
};
