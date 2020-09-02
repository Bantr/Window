import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_PLAYER_DETAILS from 'lib/graphql/queries/getPlayerDetails.gql';
import { Avatar, Title, BantrUser } from 'lib/components';
import { Container, Username, UserLinks } from './style';
import { IPlayer, IUser } from 'lib/types/generated';
import { Steam } from 'lib/icons';
import { useSnackbar } from 'notistack';

interface IResponse {
  player: IPlayer[];
  user: IUser[];
}
interface IProps {
  steamId: string;
}

export const Header: React.FC<IProps> = ({ steamId }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { loading, data, error } = useQuery<IResponse>(GET_PLAYER_DETAILS, { variables: { steamId: steamId } });

  if (error) {
    enqueueSnackbar('Ouch, something went wrong while fetching the data, please try again later!', { variant: 'error' });
    navigate('/csgo/dashboard');
  }

  return (
    <Container>
      <Avatar loading={loading} size="200px" src={loading ? '' : data.player[0].steamAvatar} />
      <Username className={loading ? 'placeholder' : null}><Title size="massive" type="h1">{loading ? null : data.player[0].steamUsername}</Title></Username>
      <UserLinks>
        {
          loading ? null :
            data.player[0].steamProfile ? <a href={data.player[0].steamProfile} rel="noopener noreferrer" target="_blank"><Steam pointer /></a> : null
        }
        {
          loading ? null :
            data.user[0] ? <BantrUser /> : null
        }
      </UserLinks>
    </Container>
  );
};
