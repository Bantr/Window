import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';
import { HeaderNav, SideNav } from '../components/dashboard/nav';

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

export const Csgo: React.FC<IProps> = ({ children }) => (
  <React.Fragment>
    <HeaderNav />
    <Container>
      <SideNav />
      <MainView>{children}</MainView>
    </Container>
  </React.Fragment>
);
