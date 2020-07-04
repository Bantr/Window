import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { HeaderNav, SideNav } from '../components/dashboard/nav';
import { AuthenticationService } from 'lib/services';
import { IUserData, UserContext } from 'lib/hooks';
import { AppLoad } from '../views/appLoad';
import { ApolloProvider } from '@apollo/react-hooks';

import { ApolloClient, ApolloLink } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { RetryLink } from 'apollo-link-retry';
//import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const Container = styled.div`
  display: flex;
`;
const MainView = styled.div`
  width: calc(100% - 350px);
  height: calc(100vh - 220px);
  padding: 100px 100px 50px 100px;
  overflow-y: auto;
`;

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}

export const Csgo: React.FC<IProps> = ({ children }) => {
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
  const [apikey, setApiKey] = React.useState('secret-key');
  const providerUserData = React.useMemo(() => ({ userData, setUserData }), [userData, setUserData]);
  const [isLoading, setLoading] = React.useState(true);
  const _authenticationService = new AuthenticationService();

  async function getSession(): Promise<IUserData> {
    return await _authenticationService.isAuthenticated();
  }

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
  React.useEffect(() => {
    getSession().then((session: IUserData) => {
      setUserData({ ...session });
      setApiKey(session.graphQLKey);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <AppLoad />;
  } else {
    return (
      <React.Fragment>
        <ApolloProvider client={apolloClient}>
          <UserContext.Provider value={providerUserData}>
            <HeaderNav />
            <Container>
              <SideNav />
              <MainView>{children}</MainView>
            </Container>
          </UserContext.Provider>
        </ApolloProvider>
      </React.Fragment>
    );
  }
};
