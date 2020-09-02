import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { UserContext } from 'lib/context';

import { Header } from '../../views/profile/header';
import { RecentMatches } from '../../views/profile/recentMatches';

const Content = styled.div`
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const Profile: React.FC = () => {
  let { steamId } = useParams();
  const { userData } = React.useContext(UserContext);

  if (!steamId) {
    steamId = userData.steamId;
  }

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta content="Get access to extensive user data." name="description" />
      </Helmet>
      <Header steamId={steamId} />
      <Content>
        <RecentMatches steamId={steamId} />
      </Content>
    </>
  );
};
