import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { Title } from 'lib/components';
import { PlatformConnections } from '../../views/platformConnections';

const Container = styled.div`
  display: block;
`;

const Inner = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  background-color: ${({ theme }): string => theme.pb};
  height: calc(100% - 40px);
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
      <PlatformConnections />
      <Title size="large" type="h4" >Valve Matchmaking</Title>
      Make sure this code is filled in to give us access to your matchmaking demos!
    </Inner>
  </Container>
);
