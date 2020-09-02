import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  button {
    font-weight: 500;
    font-size: 120%;
  }

  h2 {
    display: flex;
    align-items: center;
    .icon {
      margin-left: 5px;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 235px;
  min-width: 100px;

  h3 {
    font-size: 1.225rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 500;
    min-height: 110px;

    svg: {
      fill: ${({ theme }): string => theme.p};
    }

    &.placeholder {
      color: ${({ theme }): string => theme.placeholder};
      width: 100%;
    }
  }
`;
