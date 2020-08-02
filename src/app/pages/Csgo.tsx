import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { HeaderNav, SideNav } from '../components/dashboard/nav';
import { MatchmakingModal } from '../modals';
import { useModal } from 'lib/hooks';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);
`;
const MainView = styled.div`
  width: 100%;
  padding: 75px 75px 50px 75px;
  overflow-y: auto;
`;

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}

export const Csgo: React.FC<IProps> = ({ children }) => {
  const [ModalWrapper, openModal, closeModal] = useModal();
  const wrapperRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    openModal();
  }, []);

  return (
    <React.Fragment>
      <ModalWrapper>
        <MatchmakingModal close={closeModal} ref={wrapperRef} />
      </ModalWrapper>
      <HeaderNav />
      <Container>
        <SideNav />
        <MainView>{children}</MainView>
      </Container>
    </React.Fragment>
  );
};
