import * as React from 'react';
import styled from 'styled-components';
import { Greeting } from '../components/snacks';
import { Outlet } from 'react-router-dom';
import { HeaderNav, SideNav } from '../components/dashboard/nav';
import { MatchmakingModal } from '../modals';
import { useModal, useLocalStorage } from 'lib/hooks';
import { useSnackbar } from 'notistack';
import { DateTime } from 'luxon';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 70px);
`;
const MainView = styled.div`
  width: 100%;
  padding: 75px 75px 50px 75px;
  overflow-y: auto;
`;

export const Csgo: React.FC = () => {
  const [ModalWrapper, openModal, closeModal] = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const wrapperRef = React.createRef<HTMLDivElement>();
  const [val, setVal] = useLocalStorage('showMatchmakingModal', true);
  const [lastVisit, setLastVisit] = useLocalStorage<string>('lastVisit', null);

  React.useEffect(() => {
    if (val === true) {
      openModal();
    }

    if (lastVisit === null || DateTime.fromISO(lastVisit).diffNow().hours >= 6) {
      setLastVisit(DateTime.local().toISO());
      enqueueSnackbar(null,
        {
          anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          autoHideDuration: 10000,
          content: (key, message) => <Greeting key={key} message={message} />
        });
    }
  }, []);

  function close(): void {
    setVal(false);
    closeModal();
  }

  return (
    <React.Fragment>
      <ModalWrapper>
        <MatchmakingModal close={close} ref={wrapperRef} />
      </ModalWrapper>
      <HeaderNav />
      <Container>
        <SideNav />
        <MainView>
          <Outlet />
        </MainView>
      </Container>
    </React.Fragment>
  );
};
