import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { UserContext } from 'lib/hooks';
// import { BannedPlayersDonut, BanFeed, BannedPerMonth, AccountTreeview } from '../../components/dashboard';

const PrimaryGrid = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-auto-columns: auto;
  /*grid-template-columns: 1fr 2fr 2fr;*/
`;

const TempTitle = styled.h3`
  margin: 0 auto;
`;
interface IProps extends RouteComponentProps {
  path: string;
  default?: boolean;
}
export const Dashboard: React.FC<IProps> = () => {
  const { userData } = React.useContext(UserContext);

  return (
    <PrimaryGrid>
      <Helmet>
        <title>CSGO | Dashboard</title>
      </Helmet>
      {
        <TempTitle>Hi {userData.steamUsername}</TempTitle>
        /*
          <BannedPlayersDonut />
          <BannedPerMonth />
          <AccountTreeview />
          <BanFeed />
        */
      }
    </PrimaryGrid>
  );
};
