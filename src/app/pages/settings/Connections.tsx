import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { Title } from 'lib/components';
import { PlatformConnections, MatchMaking } from '../../views/settings/connections';
import SimpleBar from 'simplebar-react';

const Container = styled.div`
  display: block;
`;

const Inner = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }): string => theme.pb};
  height: calc(100vh - 250px);
  border-radius: 10px;
  margin-top: 20px;
`;

interface IProps extends RouteComponentProps {
  path: string;
}

export const Connections: React.FC<IProps> = () => (
  <Container>
    <Helmet>
      <title>Settings | Connections</title>
    </Helmet>
    <Title size="huge" type="h3">Connections</Title>
    <Inner>
      <SimpleBar style={{ height: '100%', width: '100%' }}>
        <PlatformConnections />
        <MatchMaking />
      </SimpleBar>
    </Inner>
  </Container>
);
