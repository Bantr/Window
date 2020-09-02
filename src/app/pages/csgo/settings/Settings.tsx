import * as React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { SettingsNav } from '../../../components/dashboard/nav/settingsNav';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 195px); /* -145 for the margins -50px for spacing */
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Settings: React.FC = () => (
  <Container>
    <SettingsNav />
    <Content>
      <Outlet />
    </Content>
  </Container>
);
