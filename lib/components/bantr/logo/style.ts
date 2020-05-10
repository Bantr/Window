import styled from 'styled-components';

export const Svg = styled.svg`
  .primary{
    fill: ${({ theme }): string => theme.p};
  }
  .secondary{
    fill: ${({ theme }): string => theme.s};
  }
`;
