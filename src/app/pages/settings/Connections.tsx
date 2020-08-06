import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { Title } from 'lib/components';
import { PlatformConnections, MatchMaking } from '../../views/settings/connections';
import { InnerSettings } from './InnerSettings';

const Container = styled.div`
  display: block;
  overflow-y: hidden;
  height: 100%;
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
    <InnerSettings>
      <PlatformConnections />
      <MatchMaking />
    </InnerSettings>
  </Container>
);
