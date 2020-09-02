import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 320px;
  height: 100%;
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  padding: 25px 0 0 35px;
  margin-right: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Link = styled(NavLink)`
  font-size: 1rem;
  margin: 5px 0;
  color: ${({ theme }): string => theme.t};
  opacity: 0.5;
  transition: opacity .2s ease-in-out;
  &.active {
    opacity :1;
  }
  &:hover {
    opacity: 1;
  }
`;
