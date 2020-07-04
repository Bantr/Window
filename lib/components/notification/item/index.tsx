import * as React from 'react';
import { Link } from '@reach/router';
import { IBanType } from '@bantr/lib/dist/types';
import { steamService, httpService } from 'lib/services';
import { Plus } from 'lib/icons';
import { useSnackbar } from 'notistack';
import { timeAgo } from 'lib/util';
import {
  Avatar,
  AvatarContainer,
  Container,
  DeleteContainer,
  DeleteIconContainer,
  Message,
  NewNotification,
  NotificationContainer,
  Ripple,
  TimeAgo
} from './style';

interface IProps {
  notificationId: number;
  avatar: string;
  name: string;
  steamId: string;
  detectedAt: string;
  index?: number;
  banType: IBanType;
  seen: boolean;
  unbanned: boolean;
  unbannedAt: string;
  onDelete?: (notificationId: number) => void;
}

export const Notification: React.FC<IProps> = ({ notificationId, avatar, name, detectedAt, index, banType, steamId, seen, onDelete, unbanned, unbannedAt }) => {
  const [isDelete, setDelete] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const containerRef = React.useRef<HTMLDivElement>();

  function getMessage(): JSX.Element {
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
    const message = unbanned ? `'s ${type} has been removed!` : ` has been ${type} banned!`;
    return <span><Link to={`/profile/${steamId}`}><strong>{steamService.validateUsername(name)}</strong></Link> {message}</span>;
  }

  async function deleteNotification(): Promise<void> {
    const response = await httpService.post(`/notification/${notificationId}/delete`);
    if (response.ok) {
      enqueueSnackbar('Message succesfully removed', { variant: 'success' });
      setDelete(true); // handles the fade out animation.
      onDelete(notificationId); // trigger to parent to remove notification from view after animation is complete.
    } else {
      // sentry error here.
      enqueueSnackbar('Ouch, something went wrong, we are working on it!', { variant: 'error' });
    }
  }

  return (
    <Container className={isDelete ? 'delete-animation' : ''} isOdd={!!(index % 2)} ref={containerRef}>
      {seen ? '' : <NewNotification><Ripple /></NewNotification>}
      <NotificationContainer>
        <AvatarContainer>
          <Link to={`/profile/${steamId}`}>
            <Avatar src={avatar} />
          </Link>
        </AvatarContainer>
        <Message>
          {getMessage()}
        </Message>
        <TimeAgo>{timeAgo(unbanned ? unbannedAt : detectedAt)}</TimeAgo>
      </NotificationContainer>
      <DeleteContainer>
        <DeleteIconContainer isOdd={!!(index % 2)}>
          {<Plus onClick={deleteNotification} pointer rotate={45} scale={0.8} />}
        </DeleteIconContainer>
      </DeleteContainer>
    </Container>
  );
};

interface ISkeletonProps {
  index: number;
}
export const SkeletonNotification: React.FC<ISkeletonProps> = ({ index }) => (
  <Container className="placeholder-container" isOdd={!!(index % 2)} >
    <AvatarContainer>
      <Avatar className="placeholder" src={undefined}></Avatar>
    </AvatarContainer>
    <Message className="placeholder" />
    <TimeAgo className="placeholder" />
  </Container>
);
