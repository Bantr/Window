import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { SettingsNav } from '../../components/dashboard/nav/settingsNav';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 195px); /* -145 for the margins -50px for spacing */
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}
export const Settings: React.FC<IProps> = ({ children }) => (
  <Container>
    <SettingsNav />
    <Content>
      {children}
    </Content>
  </Container>
);
