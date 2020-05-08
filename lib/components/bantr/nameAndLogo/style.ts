import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin-left: 15px;
    font-size: 25px;
    cursor: default;
  }
`;

export const Logo = styled.svg`
  width: 25px;
  height: auto;

  .block1 {
    fill: ${({ theme }): string => theme.p};
  }
  .block2 {
    fill: ${({ theme }): string => theme.s};
  }
`;
