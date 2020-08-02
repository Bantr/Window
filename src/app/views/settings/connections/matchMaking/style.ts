import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  width :100%;

 p{
   margin-bottom: 30px;
 }

`;

export const Inner = styled.div < { hasError: boolean }>`
  width: 100%;
  padding: 25px;
  margin: 20px 0;
  background-color: ${({ theme }): string => theme.sb};
  border-width: 3px;
  border-style: solid;
  border-color: ${({ theme, hasError }): string => hasError ? theme.error : theme.sb};
  border-radius: 10px;
`;
