import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from 'lib/hooks';
import { Router as ReachRouter, Redirect } from '@reach/router';
import { Csgo, Home, NotFound, Playground, Privacy, TermsOfUse } from '../app/pages';
import { Dashboard, Profile, Tracker, Compare, Tournaments, TacticalTimeout } from './pages/csgo';
import { Appearance, Connections, Language, Notifications, Settings } from './pages/settings';
import { authenticationService } from 'lib/services';
import { AppLoad } from './views/appLoad';

import { favicon, faviconDark } from 'lib/images';

export const Router: React.FC<{}> = () => {
  const darkMode = useTheme().dark;
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);
  const [loading, isLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    authenticationService.isAuthenticated().then((session) => {
      if (session && session.id) {
        setAuthenticated(true);
      }
      isLoading(false);
    });
  });

  return (
    <React.Fragment>
      <Helmet>
        {!darkMode ? <link href={favicon} rel="icon" type="image/png" /> : <link href={faviconDark} rel="icon" type="image/png" />}
      </Helmet>
      <ReachRouter>
        <Redirect from="/csgo" to="/csgo/dashboard" />
        <Home path="/" />
        <Privacy path="/privacy-policy" />
        <TermsOfUse path="/terms-of-use" />
        {
          isAuthenticated ?
            <>
              <Csgo path="/csgo">
                <Dashboard default path="/dashboard" />
                <Tracker path="/tracker" />
                <Compare path="/compare" />
                <TacticalTimeout path="/tactical-timeout" />
                <Tournaments path="/tournaments" />
                { /* general pages */}
                <Profile path="/profile" />
                <Settings path="/settings">
                  <Redirect from="/settings" to="/settings/connections" />
                  <Connections default path="/connections" />
                  <Notifications path="/notifications" />
                  <Appearance path="/appearance" />
                  <Language path="/language" />
                </Settings>
              </Csgo>
              <Playground path="/playground" />
            </> : null
        }
        {loading ?
          <AppLoad default />
          : <NotFound default />
        }
      </ReachRouter>
    </React.Fragment>
  );
};
