import * as React from 'react';
import { httpService, routingService, authenticationService } from 'lib/services';
import { bantrSettings } from 'lib/settings';
import { UserContext, useModal, useOutsideAlerter, useAsync } from 'lib/hooks';
import { Container, ConnectionDetails, TitleContainer, CheckmarkContainer } from './style';
import { DisconnectPlatformModal } from '../../../../modals';
import { Button, Title } from 'lib/components';
import { useSnackbar } from 'notistack';
import { Checkmark } from 'lib/icons';

export interface IProps {
  accountId: string;
  isConnected: boolean;
  platformName: string;
  username: string;
}

export const Connection: React.FC<IProps> = ({ accountId, isConnected, platformName, username }) => {
  const [connected, setConnected] = React.useState<boolean>(isConnected);
  const disconnectRequest = (): Promise<Response> => httpService.get(`/auth/${platformName.toLowerCase()}/disconnect`);
  const { execute: disconnect, pending, value: disconnected, error } = useAsync(disconnectRequest, false);
  const [ModalWrapper, openModal, closeModal] = useModal();

  const { setUserData } = React.useContext(UserContext);
  const wrapperRef = React.createRef<HTMLDivElement>();
  useOutsideAlerter(wrapperRef, (): void => { close(); });
  const { enqueueSnackbar } = useSnackbar();
  const showErrorMessage = (): void => { enqueueSnackbar('Disconnecting failed, contact support if this error remains.'); };

  React.useEffect(() => {
    if (disconnected) {
      authenticationService.isAuthenticated().then((session) => {
        if (!session || !setUserData) {
          showErrorMessage();
          throw new Error('Could not handle current session.');
        }
        setUserData({ ...session });
        const id = session[`${platformName}Id`];
        !id ? setConnected(false) : showErrorMessage();
      })
        .catch((e: Error) => console.log(e));
    }
    if (error) {
      showErrorMessage();
      console.error(error);
    }
  }, [disconnected, error]);

  function connect(): void {
    routingService.navigateExternal(
      `${bantrSettings.apiRoot}/auth/${platformName.toLowerCase()}?redirectTo=${window.location.href}`);
  }

  return (
    <Container>
      <ConnectionDetails>
        <TitleContainer>
          <Title size="large" type="h3" >{platformName}</Title>
          {
            connected ?
              <CheckmarkContainer>
                <Checkmark fill="#fff" />
              </CheckmarkContainer>
              : ''
          }
        </TitleContainer>
        {
          connected ?
            <React.Fragment>
              <p>
                username: <em>{username ? username : 'unknown'}</em>
              </p>
              <p>accountId: <em>{accountId ? accountId : 'unknown'}</em></p>
            </React.Fragment>
            :
            <p>Not connected</p>
        }
      </ConnectionDetails>
      <Button
        active={!connected}
        color="primary"
        isLoading={pending}
        onClick={connected ? openModal : connect}
      >
        {connected ? 'Disconnect' : 'Connect'}
      </Button>
      <ModalWrapper>
        <DisconnectPlatformModal close={closeModal} disconnect={disconnect} platformName={platformName} ref={wrapperRef} />
      </ModalWrapper>
    </Container>
  );
};