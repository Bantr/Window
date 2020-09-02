import * as React from 'react';
import { Card } from 'lib/components/dashboard';
import { useSubscription, OnSubscriptionDataOptions } from '@apollo/client';
import { ItemContainer, Avatar, Name } from './style';
import { IBan } from 'lib/types/generated';
import { IBanType } from '@bantr/lib/dist/types';
import SUBSCRIPTION_GET_BAN from 'lib/graphql/subscriptions/getBan.gql';
import { DateTime } from 'luxon';

// get bans
interface IResponse {
  ban: IBan;
}

interface IBanItem {
  banId: number;
  banType: IBanType;
  detectedAt: string;
  steamUsername: string;
  steamAvatar: string;
}

export const BanFeed: React.FC = () => {
  const [newData, updateData] = React.useState<IBanItem[]>([]);
  const { loading, error } = useSubscription<IResponse>(SUBSCRIPTION_GET_BAN, {
    shouldResubscribe: true, onSubscriptionData: updateFeed, variables: {
      timestamp: DateTime.fromObject({ year: DateTime.local().year, month: DateTime.local().month, hour: 0, minute: 0, second: 0, millisecond: 0 }).toISO()
    }
  });

  function updateFeed(options: OnSubscriptionDataOptions<IResponse>) {
    if (options?.subscriptionData?.data) {
      const ban = options.subscriptionData.data.ban;
      updateData([...newData, {
        banId: ban.id,
        banType: ban.type,
        steamAvatar: ban.player.steamAvatar,
        steamUsername: ban.player.steamUsername,
        detectedAt: ban.detectedAt
      }]);
    }
  }

  return (
    <Card error={error} live loading={loading} title="Ban Feed" >
      {
        newData.length
          ? newData.map((props) => (<BanItem key={`ban-feed-item-${props.banId}`} {...props} />))
          : 'It is a good day, no one has been banned yet 🎉.'
      }
    </Card >
  );
};

const BanItem: React.FC<IBanItem> = ({ steamAvatar, steamUsername }) => (
  <ItemContainer>
    <Avatar src={steamAvatar} /> <Name>{steamUsername}</Name>
  </ItemContainer>
);
