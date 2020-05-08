import * as React from 'react';
import { HttpService, RoutingService, AuthenticationService } from 'lib/services';
import { BantrSettings } from 'lib/settings';
import { UserContext, useModal, useOutsideAlerter } from 'lib/hooks';
import { Container, ConnectionDetails, TitleContainer, CheckmarkContainer } from './style';
import { DisconnectPlatformModal } from '../../../modals/disconnectPlatform';
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
  const [isDisconnecting, setDisconnecting] = React.useState<boolean>(false);
  const { setUserData } = React.useContext(UserContext);
  const [Modal, open, close] = useModal();
  const _httpService = new HttpService();
  const _authenticationService = new AuthenticationService();
  const _bantrSettings = new BantrSettings();
  const wrapperRef = React.createRef<HTMLDivElement>();
  useOutsideAlerter(wrapperRef, (): void => { close(); });
  const { enqueueSnackbar } = useSnackbar();

  function openModal(): void {
    open();
  }

  async function disconnect(): Promise<void> {
    setDisconnecting(true);
    try {
      await _httpService.get(`/auth/${platformName.toLowerCase()}/disconnect`);
      const session = await _authenticationService.isAuthenticated();

      if (!session || !setUserData) {
        throw new Error('Could not handle current session.');
      }
      setUserData({ ...session });
      const id = session[`${platformName}Id`];
      // if id doesn't exit it is successfully removed from the session & db.
      if (!id) {
        setConnected(false);
        setDisconnecting(false);
      } else {
        enqueueSnackbar('Disconnecting failed, contact support if this error remains.');
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  function connect(): void {
    const _routingService = new RoutingService();
    _routingService.navigateExternal(
      `${_bantrSettings.apiRoot}/auth/${platformName.toLowerCase()}?redirectTo=${window.location.href}`);
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
        isLoading={isDisconnecting}
        onClick={connected ? openModal : connect}
      >
        {connected ? 'Disconnect' : 'Connect'}
      </Button>
      <Modal >
        <DisconnectPlatformModal close={close} disconnect={disconnect} platformName={platformName} ref={wrapperRef} />
      </Modal>
    </Container>
  );
};
