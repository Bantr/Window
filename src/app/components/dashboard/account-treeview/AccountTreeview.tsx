import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { UserContext } from 'lib/hooks';
import { Title } from 'lib/components';
import { Hamburger } from 'lib/icons';
import gql from 'graphql-tag';
import { AccountRow, AccountRowPlaceholder } from './row-templates/AccountRow';
import { useLazyQuery } from '@apollo/react-hooks';
import { Search } from 'lib/components';

const Container = styled.div`
  grid-area: 1 / 3 / 3 / 4;
  width: 600px;
  height: 85vh;
  overflow-y: hidden;
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  box-shadow: 0 19px 38px ${({ theme }): string => theme.shadow}4D, 0 15px 12px ${({ theme }): string => theme.shadow}38;
`;
const SettingsContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  border-bottom: 2px solid ${({ theme }): string => theme.sb};
`;

const SearchContainer = styled.div`
  position: relative;
  width: 60%;
  height: 40px;
  margin-left: 20px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
  height: 100%;
`;

const Amount = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .amount {
    margin-left: 5px;
  }
  .placeholder{
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
`;

export interface ITrackedAccountData {
  trackedAccounts: ITrackedAccount[];
  amountOfMatches: number;
}
export interface ITrackedAccount {
  lastCheckedAt: string;
  steamAvatar: string;
  steamUsername: string;
  steamProfile: string;
  ref?: any;
}
export interface ISteamAccount {
  personaName: string;
  avatar: string;
  profileUrl: string;
}

const GET_TRACKED_ACCOUNTS = gql`
  query GET_TRACKED_ACCOUNTS($userId: Int!, $offset: Int!, $limit: Int!){
    trackedAccounts: tracked_account(where: {tracked_account_tracked_by_users: {userId: {_eq: $userId}}}, limit: $limit, offset: $offset) {
    lastCheckedAt,
    steamAvatar,
    steamUsername,
    steamProfile
    }
  }
`;

export const AccountTreeview: React.FC<{}> = () => {
  const limit = 50;
  const { userData } = React.useContext(UserContext);

  const [initialLoad, setInitialLoad] = React.useState(true);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [getTrackedAccounts, { loading, error, data }] = useLazyQuery<ITrackedAccountData>(
    GET_TRACKED_ACCOUNTS,
    {
      variables: { userId: userData.id, offset: pageNumber, limit },
      fetchPolicy: 'cache-and-network'
    });

  React.useEffect(() => {
    getTrackedAccounts();
    setInitialLoad(false);
  }, []);

  const observer = React.useRef<IntersectionObserver>(null!);

  const lastItemElementRef: any = React.useCallback((container: HTMLDivElement): void => {
    if (loading) { return; }

    if (observer.current) { observer.current.disconnect(); }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // LOAD NEW DATA WITH QUERY
        setPageNumber(prevPageNumber => prevPageNumber + limit);
      }
    });

    if (container) { observer.current.observe(container); }
  }, [loading]); // hasmore

  if (error) {
    // TODO: show error on component
    return <div>error</div>;
  }
  return (
    <Container>
      <SettingsContainer>
        <Inner>
          <Title align="left" size="large" type="h2" >
            See who we are tracking
          </Title>
          <Hamburger />
        </Inner>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <Amount>
          <div>Tracked accounts: </div>
          <div className={loading ? 'amount placeholder' : 'amount'}>
            {data ? data.trackedAccounts.length : ''}
          </div>
        </Amount>
      </SettingsContainer>
      {
        initialLoad ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (<AccountRowPlaceholder key={uuid()} />)) :
          loading ?
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (<AccountRowPlaceholder key={uuid()} />))
            :
            <div style={{ overflowY: 'scroll', height: '88%' }}>{
              !data.trackedAccounts.length ? <div>this is so empty</div> :
                data.trackedAccounts.map((trackedAccount, index) => {
                  if (data.trackedAccounts.length === index + 1) {
                    return (
                      <AccountRow key={uuid()} ref={lastItemElementRef} {...trackedAccount} />
                    );
                  }
                  return (
                    <AccountRow key={uuid()} {...trackedAccount} />
                  );
                })}</div>
      }
    </Container>
  );
};
