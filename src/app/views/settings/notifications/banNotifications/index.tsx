import * as React from 'react';
import { Title, Checkbox, InfoTooltip } from 'lib/components';
import { useSnackbar } from 'notistack';
import { Container, Inner, NotificationCheckboxContainer, Description } from './style';
import { IBanType } from '@bantr/lib/dist/types';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery, gql } from '@apollo/client';
import { httpService } from 'lib/services';
import { IUser } from 'lib/types/generated';
import * as Sentry from '@sentry/react';

const GET_NOTIFICATION_SETTINGS = gql`
  query GET_NOTIFICATION_SETTINGS{
    user {
      settings {
        notificationCommunityEnabled
        notificationEconomyEnabled
        notificationFaceitEnabled
        notificationGameEnabled
        notificationVACEnabled
      }
  }
}
`;

interface IFormInputs {
  notificationCommunityEnabled: boolean;
  notificationEconomyEnabled: boolean;
  notificationFaceitEnabled: boolean;
  notificationGameEnabled: boolean;
  notificationVACEnabled: boolean;
}

interface IUserResponse {
  user: IUser[];
}

export const BanNotifications: React.FC = () => {
  const { loading, data, error } = useQuery<IUserResponse>(GET_NOTIFICATION_SETTINGS);
  const { enqueueSnackbar } = useSnackbar();

  const communityBanText = 'A community ban is a ban which restricts access to the Steam Community features for breaking the Rules and Guidelines. E.g. posting content related to racism or other forms of bigotry, harassing other users, inappropriate language...';

  if (error) {
    enqueueSnackbar('Something went wrong fetching the data. The checkboxes could be showing incorrect data. :(, Please try again later!');
    Sentry.captureException(error);
  }

  return (
    <Container>
      <Title size="medium" type="h4">Ban notifications</Title>
      <Description>Which notifications would you like to receive? Note: if you turn off notifications for a certain type, you will neither receive them on the web application nor on one of the third party platforms.</Description>
      <Inner>
        <NotificationCheckbox
          banType={IBanType.Community}
          defaultValue={data ? data.user[0].settings.notificationCommunityEnabled : false}
          loading={loading}
          name="notificationCommunityEnabled"
          text="Community ban"
          tooltip={communityBanText}
        />
        <NotificationCheckbox
          banType={IBanType.Economy}
          defaultValue={data ? data.user[0].settings.notificationEconomyEnabled : false}
          loading={loading}
          name="notificationEconomyEnabled"
          text="Economy ban"
        />
        <NotificationCheckbox
          banType={IBanType.Faceit}
          defaultValue={data ? data.user[0].settings.notificationFaceitEnabled : false}
          loading={loading}
          name="notificationFaceitEnabled"
          text="Faceit ban"
        />
        <NotificationCheckbox
          banType={IBanType.Game}
          defaultValue={data ? data.user[0].settings.notificationGameEnabled : false}
          loading={loading}
          name="notificationGameEnabled"
          text="Game ban"
        />
        <NotificationCheckbox
          banType={IBanType.VAC}
          defaultValue={data ? data.user[0].settings.notificationVACEnabled : false}
          loading={loading}
          name="notificationVacEnabled"
          text="Valve Anti Cheat ban (VAC)"
        />
      </Inner>
    </Container >
  );
};

interface INotificationCheckbox {
  banType: IBanType;
  loading: boolean;
  name: string;
  text: string;
  defaultValue: boolean;
  tooltip?: React.ReactNode | string;
}

export const NotificationCheckbox: React.FC<INotificationCheckbox> = ({ name, loading, text, defaultValue, tooltip, banType }) => {
  const { register, handleSubmit } = useForm<IFormInputs>({ mode: 'onChange' });
  const { enqueueSnackbar } = useSnackbar();
  const buttonRef = React.createRef<HTMLInputElement>();

  const onSubmit: SubmitHandler<IFormInputs> = React.useCallback(async (values) => {
    try {
      const resp = await httpService.post('/settings/notification/bantype', { type: banType, status: values[name] });
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
    <NotificationCheckboxContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox defaultChecked={defaultValue} labelText={text} loading={loading} name={name} onChange={(): void => { buttonRef.current.click(); }} ref={register} />
        {
          tooltip ?
            <div className="tooltip-container"><InfoTooltip content={tooltip} scale={1.25} /></div>
            :
            null
        }
        <input ref={buttonRef} type="submit" />
      </form>
    </NotificationCheckboxContainer >
  );
};
