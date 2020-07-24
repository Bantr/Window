import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { INotification } from 'lib/types/generated';
import { IBanType } from '@bantr/lib/dist/types';
import { Container, NoNotifications } from './style';
import SimpleBar from 'simplebar-react';
import { Notification, SkeletonNotification } from '../item';
import * as Sentry from '@sentry/react';

const GET_NOTIFICATIONS = gql`
  query GET_NOTIFICATIONS{
    notifications: notification( where: {deleted: {_eq: false }}, order_by: {ban: {detectedAt: desc}}) {
      id
      seen
      createdAt
        ban {
            detectedAt
            type
            unbanned
            unbannedAt
              player {
              steamUsername
              steamAvatar
              steamId
              }
         }
    }
  }
`;

interface INotificationsResponse {
  notifications: INotification[];
}

interface IProps {
  deletedNotifications: number[];
  deleteNotification: (notificationId: number) => void;
  getNewNotifications: (notificationIds: number[]) => void;
}

export const NotificationList: React.FC<IProps> = ({ deletedNotifications, deleteNotification, getNewNotifications }) => {
  let count = 0;

  const { loading, data, error } = useQuery<INotificationsResponse>(GET_NOTIFICATIONS);
  const [isEmpty, setEmpty] = React.useState(false);

  function skeletonLoading(): React.ReactNode {
    return (
      <React.Fragment>
        <SkeletonNotification index={0} />
        <SkeletonNotification index={1} />
        <SkeletonNotification index={2} />
      </React.Fragment>
    );
  }

  function onDelete(notificationId: number): void {
    count++;
    deleteNotification(notificationId);
    if (data.notifications.length === count) {
      setEmpty(true);
    }
  }

  React.useEffect(() => {
    if (data) {
      // this will callback to a post to delete all notification that have seen = false.
      const newNotificationsIds = data.notifications.map(({ id, seen }) => seen ? null : id).filter((id) => id);
      getNewNotifications(newNotificationsIds);
    }
  }, [data]);

  function loadNotificationComponents(notificationsResponse: INotificationsResponse): React.ReactNode | React.ReactNode[] {
    // If notificationList is open and all notifications are removed.
    if (isEmpty) {
      return <NoNotifications>All notifications have been removed.</NoNotifications>;
    }
    // If there are no notifications in the response.
    if (!notificationsResponse.notifications.length) {
      return <NoNotifications>No notifications found 🧐 <br />Go report some people!</NoNotifications>;
    }

    const notificationComponents = [];
    // required for the coloring.
    let index = 0;

    try {
      for (const { ban, seen, id } of notificationsResponse.notifications) {
        let isDeleted = false;
        for (const deletedNotificationId of deletedNotifications) {
          if (deletedNotificationId === id) {
            isDeleted = true;
          }
        }
        if (!isDeleted) {
          notificationComponents.push(
            <Notification
              avatar={ban.player.steamAvatar}
              banType={ban.type as IBanType}
              detectedAt={ban.detectedAt}
              index={index}
              key={`notification-${index}`}
              name={ban.player.steamUsername}
              notificationId={id}
              onDelete={onDelete}
              seen={seen}
              steamId={ban.player.steamId}
              unbanned={ban.unbanned}
              unbannedAt={ban.unbannedAt}
            >
            </Notification>);
        }
        index++;
      }
      return notificationComponents;
    } catch (e) {
      Sentry.captureException(e);
      return (<NoNotifications>Something went wrong 🥺 . <br /> If this error remains contact support!</NoNotifications>);
    }
  }

  if (error) {
    return (
      <Container>
        <NoNotifications>Ouch, something went wrong..</NoNotifications>
      </Container>
    );
  }

  return (
    < Container>
      <SimpleBar style={{ height: '100%', minHeight: '210px', maxHeight: '350px', width: '450px' }}>
        {
          loading ? skeletonLoading() : loadNotificationComponents(data)
        }
      </SimpleBar>
    </Container >
  );
};
