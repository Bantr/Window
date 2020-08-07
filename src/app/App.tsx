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
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import { AppLoad } from './views/appLoad';
import { IUserData, UserContext } from 'lib/context';
import { bantrSettings } from 'lib/settings';

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
  const [apiKey, setApiKey] = React.useState<string>(null);

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
  }, []);

  // Backend expects if the apiKey does not exist it does not send an empty one.
  const headers = apiKey ? { headers: { 'bantr-graphql': apiKey } } : null;

  const link = ApolloLink.from([
    new RetryLink(),
    new WebSocketLink(new SubscriptionClient(`wss://${bantrSettings.graphQLEndpoint}`, { reconnect: true, connectionParams: headers }))
  ]);

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });

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
              vertical: 'top',
              horizontal: 'center'
            }}
            autoHideDuration={5000}
            hideIconVariant={false}
            maxSnack={3}
            preventDuplicate
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
