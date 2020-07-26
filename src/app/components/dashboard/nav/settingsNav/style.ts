import styled from 'styled-components';
import { Link } from '@reach/router';

export const Container = styled.div`
  width: 320px;
  height: 80%;
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

export const StyledLink = styled(Link) <{ isCurrent?: boolean }>`
  font-size: 1rem;
  margin: 5px 0;
  color: ${({ theme }): string => theme.t};

  &:hover {
    opacity: 0.7;
  }
`;
