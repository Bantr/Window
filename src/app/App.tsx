import * as React from 'react';
import * as Sentry from '@sentry/react';
import { Router } from './router';
import { GlobalStyle } from '../constants/globalStyle';
import { ThemeProvider } from 'lib/hooks';
import { ErrorFallback } from 'lib/components';
import { authenticationService } from 'lib/services';
import { SnackbarProvider } from 'notistack';
import { theme } from '../constants/theme';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient, ApolloLink } from 'apollo-boost';
import { RetryLink } from 'apollo-link-retry';
//import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppLoad } from './views/appLoad';
import { IUserData, UserContext } from 'lib/hooks';

/* tooltip styling */
import 'rc-tooltip/assets/bootstrap.css';
import 'simplebar/dist/simplebar.min.css';

export const App: React.FC = () => {
  const defaultUserData: IUserData = {
    isAuthenticated: true,
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

  async function getSession(): Promise<IUserData> {
    return await authenticationService.isAuthenticated();
  }

  React.useEffect(() => {
    getSession().then((session: IUserData) => {
      setUserData({ ...session });
      setApiKey(session.graphQLKey);
      setLoading(false);
    });
  }, []);
  const [apikey, setApiKey] = React.useState('secret-key');

  const link = ApolloLink.from([
    new RetryLink(),
    new HttpLink({
      uri: 'https://graphql.bantr.app',
      // this should become same origin
      credentials: 'same-origin',
      headers: {
        'BANTR-GRAPHQL': apikey
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
      <React.Fragment>
        <Sentry.ErrorBoundary fallback={ErrorFallback}>
          <ThemeProvider theme={theme}>
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
                </UserContext.Provider>
              </ApolloProvider>
            </SnackbarProvider>
            <GlobalStyle />
          </ThemeProvider>
        </Sentry.ErrorBoundary>
      </React.Fragment >
    );
  }
};
