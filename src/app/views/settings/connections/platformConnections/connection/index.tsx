import * as React from 'react';
import { httpService, routingService, authenticationService } from 'lib/services';
import { bantrSettings } from 'lib/settings';
import { UserContext, useModal, useOutsideAlerter, useAsync } from 'lib/hooks';
import { Container, ConnectionDetails, TitleContainer, CheckMarkContainer } from './style';
import { ConfirmationModal } from 'lib/components';
import { Button, Title } from 'lib/components';
import { useSnackbar } from 'notistack';
import { CheckMark } from 'lib/icons';
import * as Sentry from '@sentry/react';

export interface IProps {
  accountId: string;
  isConnected: boolean;
  platformName: string;
  username: string;
}

export const Connection: React.FC<IProps> = ({ accountId, isConnected, platformName, username }) => {
  const [connected, setConnected] = React.useState<boolean>(isConnected);
  const disconnectRequest = (): Promise<Response> => httpService.get(`/auth/${platformName.toLowerCase()}/disconnect`);
  const { execute: disconnect, pending, value: disconnected, error } = useAsync(disconnectRequest, false); // false parameter = immediate
  const [ModalWrapper, openModal, closeModal] = useModal();

  const { setUserData } = React.useContext(UserContext);
  const wrapperRef = React.createRef<HTMLDivElement>();
  useOutsideAlerter(wrapperRef, (): void => { close(); });
  const { enqueueSnackbar } = useSnackbar();
  const showErrorMessage = (): void => { enqueueSnackbar('Disconnecting failed, contact support if this error remains.'); };

  React.useEffect(() => {
    authenticationService.isAuthenticated(true).then((session) => {
      if (!session || !setUserData) {
        showErrorMessage();
        throw new Error('Could not handle current session.');
      }
      setUserData({ ...session });
      const id = session[`${platformName.toLowerCase()}Id`];
      if (id) {
        setConnected(true);
      } else {
        setConnected(false);
      }
    }).catch((e: Error) => Sentry.captureException(e));

    if (error) {
      Sentry.captureException(error);
      showErrorMessage();
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
              <CheckMarkContainer>
                <CheckMark fill="#fff" />
              </CheckMarkContainer>
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
        <ConfirmationModal
          action={disconnect}
          actionText="Disconnect"
          close={closeModal}
          description={`Are you sure you want to disconnect ${platformName}?`}
          ref={wrapperRef}
          title={`Disconnect ${platformName}`}
        />
      </ModalWrapper>
    </Container>
  );
};
