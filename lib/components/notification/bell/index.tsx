import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { Bell } from 'lib/icons';
import { INotificationAggregate } from 'lib/types/generated';
import useSound from 'use-sound';
import { useOutsideAlerter } from 'lib/hooks';
import notificationSfx from '../notification.mp3';
import { NotificationList } from '../notificationList';
import { httpService } from 'lib/services';
import { BellIcon, Container, NotificationIcon } from './style';
import * as Sentry from '@sentry/react';

const GET_NEW_NOTIFICATION_COUNT = gql`
  query GET_NEW_NOTIFICATION_COUNT{
    notification: notification_aggregate(where: {deleted: {_eq: false}, seen: {_eq: false}}){
      aggregate {
        count
      }
    }
  }
`;

type NotificationResponse = {
  notification: INotificationAggregate;
}

export const NotificationBell: React.FC<{}> = () => {
  const [visible, toggleVisible] = React.useState(false);
  const [hasNewNotification, setNewNotification] = React.useState<boolean>(false);
  const [deletedNotifications, setDeletedNotifications] = React.useState<number[]>([]);

  const [play] = useSound(notificationSfx);
  const { loading, data, error } = useQuery<NotificationResponse>(GET_NEW_NOTIFICATION_COUNT, { pollInterval: 5 * 1000 * 60 });
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, (): void => { toggleVisible(false); });

  if (error) {
    Sentry.captureException(error);
  }

  function bellClicked(): void {
    setNewNotification(false);
    toggleVisible(!visible);
  }
  function deleteNotification(notificationId: number): void {
    setDeletedNotifications([...deletedNotifications, notificationId]);
  }

  async function setNotificationsToSeen(notificationIds: number[]): Promise<void> {
    if (notificationIds) {
      const body = { 'status': true, 'ids': notificationIds };
      httpService.post('/notification/seen', body).catch((e: Error) => { Sentry.captureException(e); });
    }
  }

  React.useEffect(() => {
    if (data) {
      if (data.notification.aggregate.count && !hasNewNotification) {
        setNewNotification(true);
        play();
      }
    }
  }, [loading, data]);

  return (
    <Container ref={wrapperRef}>
      <BellIcon className={hasNewNotification ? 'animate' : ''} data-cy="headerNav-notificationBell" onClick={bellClicked}>
        <Bell pointer scale={1.2} />
        {hasNewNotification ? <NotificationIcon /> : ''}
      </BellIcon>
      {
        visible ?
          <NotificationList
            deletedNotifications={deletedNotifications}
            deleteNotification={deleteNotification}
            setNotificationsToSeen={setNotificationsToSeen}
          />
          :
          ''
      }
    </Container >
  );
};
