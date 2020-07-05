import styled from 'styled-components';
import { Link } from '@reach/router';

export const Container = styled.header`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 100%;
  height: 75px;

  .resize-transition {
    transition: width 0.2s ease-in-out;
    margin-left: 25px;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a{
    margin: 0 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    will-change: opacity;
    font-size: 0.8rem;

    &:hover {
      opacity: 1;
    }
  }
`;

export const NavigationList = styled.ul`
  height: 100%;
  flex: 0 0 auto;
  list-style: outside none none;
  margin-left: auto;
  justify-self: end;
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem!important;
  opacity: 1!important;

  svg {
    margin-right: 15px;
  }

  &.logo {
    margin: 0 20px 0 0;
  }
`;

export const Avatar = styled.div<{ url: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-image: url(${({ url }): string => url ? url : 'none'});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  margin: 0 10px 0 -5px;
`;
