import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { IBanType } from '@bantr/lib/dist/types';
import { steamService, httpService } from 'lib/services';
import { timeAgo } from 'lib/util';
import { useOutsideAlerter } from 'lib/hooks';
import { Options, Eye, Trash } from 'lib/icons';
import {
  Avatar,
  AvatarContainer,
  Container,
  Message,
  NotificationContainer,
  TimeAgo
} from '../style';
import { OptionsContainer, Option } from './style';

interface IProps {
  notificationId: number;
  avatar: string;
  name: string;
  seen: boolean;
  steamId: string;
  detectedAt: string;
  banType: IBanType;
  unbanned: boolean;
  unbannedAt: string;
}

export const Notification: React.FC<IProps> = ({ notificationId, avatar, name, detectedAt, banType, steamId, seen, unbanned, unbannedAt }) => {
  name = steamService.validateUsername(name);
  const [isDelete, setDelete] = React.useState(false);
  const [showOptions, setShowOptions] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, (): void => setShowOptions(false));

  function getMessage(): string {
    let type: string;
    switch (parseInt(banType as unknown as string, 10)) {
      case IBanType.Community:
        type = 'community';
        break;
      case IBanType.Economy:
        type = 'economy';
        break;
      case IBanType.Faceit:
        type = 'faceit';
        break;
      case IBanType.Game:
        type = 'game';
        break;
      case IBanType.VAC:
        type = 'VAC';
        break;
    }
    return unbanned ? `${name}'s ${type} ban has been removed!` : `${name} has received a(n) ${type} ban!`;
  }
  if (isDelete) {
    return null;
  }

  return (
    <Container data-cy="notification" ref={containerRef}>
      <Link to={`/csgo/profile/${steamId}`}>
        <NotificationContainer>
          <AvatarContainer>
            <Avatar src={avatar} />
          </AvatarContainer>
          <Message>
            <span>{getMessage()}</span>
            <TimeAgo>{timeAgo(unbanned ? unbannedAt : detectedAt)}</TimeAgo>
          </Message>
          {<Options
            highlight
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              // Stops link container to fire when clicking on the options button.
              e.stopPropagation(); e.preventDefault();
              setShowOptions(!showOptions);
            }} pointer scale={1} />}
        </NotificationContainer>
      </Link>
      <NotificationOptions notificationId={notificationId} seen={seen} setDelete={setDelete} show={showOptions} />
    </Container>
  );
};

interface INotificationOptionProps {
  notificationId: number;
  seen: boolean;
  show: boolean;
  setDelete: any;
}
const NotificationOptions: React.FC<INotificationOptionProps> = ({ notificationId, show, seen, setDelete }) => {
  async function setNotificationToSeen(): Promise<void> {
    const body = { 'status': true, 'ids': [notificationId] };
    httpService.post('/notification/seen', body).catch((e: Error) => { Sentry.captureException(e); });
  }

  async function deleteNotification(): Promise<void> {
    // prevent link navigation on button
    const response = await httpService.post(`/notification/${notificationId}/delete`);

    if (response.ok) {
      setDelete(true);
    }
    // TODO: add func if delete failed.
    return;
  }

  return (
    <OptionsContainer seen={seen} show={show}>
      {seen ? null : <Option onClick={setNotificationToSeen}><Eye pointer />Mark as read</Option>}
      <Option onClick={deleteNotification}><Trash pointer /> Remove this notification</Option>
    </OptionsContainer>
  );
};
