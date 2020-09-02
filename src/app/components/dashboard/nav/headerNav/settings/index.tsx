import * as React from 'react';
import { Settings as SettingsIcon, AlertTriangle } from 'lib/icons';
import { useQuery, gql } from '@apollo/client';
import { Link, AlertContainer } from './style';
import * as Sentry from '@sentry/react';
import Tooltip from 'rc-tooltip';

const GET_MATCHMAKING_CODES = gql`
  query GET_MATCHMAKING_CODES {
    user {
      settings {
        lastKnownMatch
        matchAuthCode
      }
  }
}
`;

type Settings = {
  matchAuthCode: string;
  lastKnownMatch: string;
}

export const Settings: React.FC = () => {
  const { data, error } = useQuery(GET_MATCHMAKING_CODES, { fetchPolicy: 'cache-and-network' });
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    if (data) {
      try {
        const settings = data.user[0].settings as Settings;
        if (settings.matchAuthCode === '' || settings.lastKnownMatch === '') {
          setShowAlert(true);
        }
        if (error) {
          Sentry.captureException(error);
        }
      } catch (e) {
        Sentry.captureException(e);
      }
    }
  }, [data]);

  return (
    <Tooltip
      mouseEnterDelay={.25}
      overlay="Settings"
      placement="bottom"
      trigger="hover"
    >
      <Link className="icon-container" data-cy="headerNav-settings" to="/csgo/settings/connections">
        {showAlert ? <AlertContainer><AlertTriangle scale={.8} /></AlertContainer> : null}
        <SettingsIcon highlight pointer />
      </Link>
    </Tooltip>
  );
};
