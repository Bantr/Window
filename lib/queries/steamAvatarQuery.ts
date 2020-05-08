import gql from 'graphql-tag';

export const steamAvatarQuery = gql`query STEAM_AVATAR_QUERY($steamId: String!) {
  user(where: { steamId: {_eq: $steamId}}) {
    steamAvatar
  }
}`;
