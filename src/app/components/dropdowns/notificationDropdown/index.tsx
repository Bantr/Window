import * as React from 'react';
import { useQuery } from '@apollo/client';
import { INotification } from 'lib/types/generated';
import { IBanType } from '@bantr/lib/dist/types';
import { Container, Inner, NoNotifications, TitleContainer } from './style';
import SimpleBar from 'simplebar-react';
import { Title, Button } from 'lib/components';
import { httpService } from 'lib/services';
import GET_NOTIFICATIONS from 'lib/graphql/queries/getNotifications.gql';
import { Notification } from './notifications/notification';
import { useSnackbar } from 'notistack';
import { SkeletonNotification } from './notifications/skeletonNotification';
import * as Sentry from '@sentry/react';

interface INotificationsResponse {
  notifications: INotification[];
}

export const NotificationsDropdown: React.FC = () => {
  const { loading, data, error } = useQuery<INotificationsResponse>(GET_NOTIFICATIONS, { fetchPolicy: 'no-cache' });
  const { enqueueSnackbar } = useSnackbar();

  // Todo get viewportHeight
  function skeletonLoading(): React.ReactNode {
    return (
      <React.Fragment>
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
        <SkeletonNotification />
      </React.Fragment>
    );
  }

  async function markAllNewNotificationsAsRead(): Promise<void> {
    const notificationIds = data.notifications.filter(({ seen }) => seen === false).map(({ id }) => id);

    try {
      const response = await httpService.post('/notification/seen', { status: true, ids: notificationIds });
      if (!response.ok) { enqueueSnackbar('Ouch, something went wrong. We were not able to mark the notifications as read.', { variant: 'error' }); }
    } catch (e) {
      Sentry.captureException(e);
    }
  }

  function createNotifications(notifications: INotification[]): React.ReactNode | React.ReactNode[] {
    const newNotifications = [];
    const newNotificationIds: number[] = [];
    const seenNotifications = [];
    // If there are no notifications in the response.
    if (!notifications.length) {
      return <NoNotifications>No notifications found 🧐 <br />Go report some people!</NoNotifications>;
    }

    for (const { ban, id, seen } of notifications) {
      const notification = (
        <Notification
          avatar={ban.player.steamAvatar}
          banType={ban.type as IBanType}
          detectedAt={ban.detectedAt}
          key={`notification-${id}`}
          name={ban.player.steamUsername}
          notificationId={id}
          seen={seen}
          steamId={ban.player.steamId}
          unbanned={ban.unbanned}
          unbannedAt={ban.unbannedAt}
        />
      );
      if (seen) {
        seenNotifications.push(notification);
      } else {
        newNotifications.push(notification);
        newNotificationIds.push(id);
      }
    }

    return (
      <React.Fragment>
        {newNotifications.length ? <>
          <TitleContainer>
            <Title size="small" type="h3">New</Title>
            <Button onClick={markAllNewNotificationsAsRead} variant="text">Mark all as read</Button>
          </TitleContainer>
          {newNotifications}
        </>
          : null
        }
        {seenNotifications.length ? <> <Title size="small" type="h3">Earlier</Title> {seenNotifications} </> : null}
      </React.Fragment>
    );
  }

  if (error) {
    Sentry.captureException(error);
    return (
      <Container>
        <NoNotifications>Ouch, something went wrong..</NoNotifications>
      </Container>
    );
  }

  return (
    <Container>
      <SimpleBar style={{ height: '100%', width: '450px' }}>
        <Inner>
          <Title size="medium">Notifications</Title>
          {loading || !data ? skeletonLoading() : createNotifications(data.notifications)}
        </Inner>
      </SimpleBar>
    </Container>
  );
};
