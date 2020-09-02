import * as React from 'react';
import { useSubscription } from '@apollo/client';
import { Bell } from 'lib/icons';
import { INotificationAggregate } from 'lib/types/generated';
import useSound from 'use-sound';
import { useOutsideAlerter } from 'lib/hooks';
import notificationSfx from '../notification.mp3';
import { NotificationsDropdown } from '../../../../../dropdowns/notificationDropdown';
import { BellIcon, Container, NotificationIcon } from './style';
import SUBSCRIPTION_GET_NEW_NOTIFICATION_COUNT from 'lib/graphql/subscriptions/getNewNotificationCount.gql';
import * as Sentry from '@sentry/react';
import Tooltip from 'rc-tooltip';

type NotificationResponse = {
  notification: INotificationAggregate;
}

export const NotificationBell: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [hasNewNotification, setNewNotification] = React.useState<boolean>(false);

  // Play sound when a new notification is received
  const [play] = useSound(notificationSfx);
  const { loading, data, error } = useSubscription<NotificationResponse>(SUBSCRIPTION_GET_NEW_NOTIFICATION_COUNT);

  // Ref to close notifications dropdown when clicked outside of it.
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, (): void => { setOpen(false); });

  if (error) {
    Sentry.captureException(error);
  }

  function bellClicked(): void {
    setNewNotification(false);
    setOpen(!open);
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
      <Tooltip
        mouseEnterDelay={.25}
        overlay="Notifications"
        placement="bottom"
        trigger="hover"
      >
        <BellIcon className={hasNewNotification ? 'animate' : ''} data-cy="headerNav-notificationBell" onClick={bellClicked}>
          <Bell highlight pointer scale={1.2} />
          {hasNewNotification ? <NotificationIcon /> : ''}
        </BellIcon>
      </Tooltip>
      {
        open ?
          <NotificationsDropdown />
          :
          ''
      }
    </Container >
  );
};
