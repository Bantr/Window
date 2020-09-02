import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto 50px auto;
`;

export const Username = styled.div`
  margin-left: 30px;
  text-transform: capitalize;

  h1 {
    font-size: 2rem;
  }

  &.placeholder {
    width: 300px;
    height: 50px;
  }
`;

export const UserLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
  }
`;
