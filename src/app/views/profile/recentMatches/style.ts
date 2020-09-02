import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 800px;
  gap: 50px;
`;

export const MatchesContainer = styled.div`
  width: 100%;
`;

export const MatchesHeader = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 100px 75px 100px 75px 200px 100px 50px;  /* 700px   --> Map, source, kills/deaths, K/R, Date, Result, arrow */
  width: 100%;
  padding: 15px 0;
  gap: 5px;
  text-align: center;
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      margin-left: 5px;
    }
  }
`;

export const Matches = styled.div`
  width: 100%;

  div:last-child {
    margin: 5px 0 0 0;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 375px;
  padding: 20px;
`;
