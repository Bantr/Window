import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import SimpleBar from 'simplebar-react';
import { SettingsNav } from '../../components/nav/settingsNav';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 225px);
`;

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}
export const Settings: React.FC<IProps> = ({ children }) => (
  <Container>
    <SettingsNav />
    <SimpleBar style={{ height: '100%', width: '100%' }}>
      {children}
    </SimpleBar>
  </Container>
);
