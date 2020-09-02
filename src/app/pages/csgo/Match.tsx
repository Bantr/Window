import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Construction } from 'lib/components';
// import { useParams } from 'react-router-dom';

export const Match: React.FC = () => (
  // let { matchId } = useParams();
  <React.Fragment>
    <Helmet>
      <title>Match</title>
      <meta content="Bantr processes CSGO matches, so YOU can inspect and learn from your previous matches. The Bantr match page contains extensive match data." name="description" />
    </Helmet>
    <Construction />
  </React.Fragment>
);
