import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import { BannedPlayersDonut, BanFeed, BannedPerMonth, AccountTreeview } from '../../components/dashboard';

const PrimaryGrid = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-auto-columns: auto;
  grid-template-columns: 1fr 2fr 2fr;
`;

interface IProps extends RouteComponentProps {
  path: string;
}
export const Dashboard: React.FC<IProps> = () => (
  <PrimaryGrid>
    <Helmet>
      <title>Csgo | Dashboard</title>
    </Helmet>
    {
      /*
        <BannedPlayersDonut />
        <BannedPerMonth />
        <AccountTreeview />
        <BanFeed />
      */
    }
  </PrimaryGrid>
);
