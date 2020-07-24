import * as React from 'react';
import * as Sentry from '@sentry/react';
import { Router } from './router';
import { GlobalStyle } from '../constants/globalStyle';
import { ThemeProvider } from 'lib/hooks';
import { ErrorFallback } from 'lib/components';
import { authenticationService } from 'lib/services';
import { SnackbarProvider } from 'notistack';
import { theme } from '../constants/theme';
import { RetryLink } from '@apollo/client/link/retry';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloClient, ApolloLink,ApolloProvider, HttpLink } from '@apollo/client';
import { AppLoad } from './views/appLoad';
import { IUserData, UserContext } from 'lib/hooks';

/* tooltip styling */
import 'rc-tooltip/assets/bootstrap.css';
import 'simplebar/dist/simplebar.min.css';

const App: React.FC = () => {
  const defaultUserData: IUserData = {
    id: null,
    username: null,
    steamId: null,
    steamAvatar: null,
    steamUsername: null,
    steamProfile: null,
    faceitId: null,
    discordId: null,
    discordUsername: null,
    graphQLKey: null
  };

  const [userData, setUserData] = React.useState(defaultUserData);
  const providerUserData = React.useMemo(() => ({ userData, setUserData }), [userData, setUserData]);
  const [isLoading, setLoading] = React.useState(true);
  const [apiKey, setApiKey] = React.useState('no-key');

  async function getSession(): Promise<IUserData> {
    return await authenticationService.isAuthenticated();
  }

  React.useEffect(() => {
    // should only check onLoad if the session exists, if the user has been authenticated in the past.

    getSession().then((session: IUserData) => {
      if (session) {
        setUserData({ ...session });
        setApiKey(session.graphQLKey);
      }
      setLoading(false);
      return;
    });
    setLoading(false);
  }, []);

  const link = ApolloLink.from([
    new RetryLink(),
    new HttpLink({
      uri: 'https://graphql.bantr.app',
      // this should become same origin
      credentials: 'same-origin',
      headers: {
        'BANTR-GRAPHQL': apiKey
      }
    })
  ]);

  const apolloClient = new ApolloClient({ link, cache: new InMemoryCache() });

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <AppLoad />;
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Sentry.ErrorBoundary fallback={ErrorFallback}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            hideIconVariant={false}
            maxSnack={3}
          >
            <ApolloProvider client={apolloClient}>
              <UserContext.Provider value={providerUserData}>
                <Router />
                <GlobalStyle />
              </UserContext.Provider>
            </ApolloProvider>
          </SnackbarProvider>
        </Sentry.ErrorBoundary >
      </ThemeProvider >
    );
  }
};

export default Sentry.withProfiler(App);
