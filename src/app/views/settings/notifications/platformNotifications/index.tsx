import * as React from 'react';
import gql from 'graphql-tag';
import { Container, Description, SteamContainer, InnerForm } from './style';
import { httpService } from 'lib/services';
import { UserContext } from 'lib/hooks';
import { useSnackbar } from 'notistack';
import { ComingSoon } from 'lib/components';
import { useQuery } from '@apollo/client';
import { Title, Checkbox } from 'lib/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IUser } from 'lib/types/generated';
import * as Sentry from '@sentry/react';
import { INotificationType } from '@bantr/lib/dist/types';

const GET_PLATFORM_NOTIFICATION_SETTINGS = gql`
  query GET_NOTIFICATION_SETTINGS {
    user {
      settings {
        notificationDiscordEnabled
      }
    }
  }
`;

interface IFormInputs {
  notificationDiscordEnabled: boolean;
}

interface IUserResponse {
  user: IUser[];
}

export const PlatformNotifications: React.FC = () => {
  const name = 'notificationDiscordEnabled';
  const { userData } = React.useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const buttonRef = React.createRef<HTMLInputElement>();
  const { register, handleSubmit } = useForm<IFormInputs>({ mode: 'onChange' });
  const { loading, data, error } = useQuery<IUserResponse>(GET_PLATFORM_NOTIFICATION_SETTINGS, { skip: !userData.discordId });

  if (error) {
    enqueueSnackbar('Something went wrong while fetching the data :(. Please try again later!');
    Sentry.captureException(error);
  }

  const onSubmit: SubmitHandler<IFormInputs> = React.useCallback(async (values) => {
    try {
      const resp = await httpService.post('/settings/notification/platform', { platform: INotificationType.Discord, status: values[name] });
      if (!resp.ok) {
        enqueueSnackbar('Something went wrong while processing your settings. Please try again.', { variant: 'error' });
      }
    } catch (e) {
      Sentry.captureException(e);
      enqueueSnackbar('An unexpected error occurred. Please try again.', { variant: 'error' });
      // error
    }
  }, []);

  return (
    <Container>
      <Title size="large" type="h4">Push notifications</Title>
      <Description>On which platform would you like to receive Bantr notifications</Description>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InnerForm>
          <Checkbox
            defaultChecked={data ? data.user[0].settings.notificationDiscordEnabled : false} labelPosition="left"
            labelText="Get notifications on Discord (Make sure the platform is linked.)"
            loading={loading}
            name={name}
            onChange={(): void => { buttonRef.current.click(); }}
            readOnly={userData.discordId ? false : true}
            readOnlyMessage="Your Discord account is not connected. You can connect Discord in the connection settings."
            ref={register}
          />
          <SteamContainer><span>Get notifications on Steam</span> <ComingSoon /></SteamContainer>
          <input ref={buttonRef} type="submit" />
        </InnerForm>
      </form>
    </Container>
  );
};
