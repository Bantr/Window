import styled from 'styled-components';

export const ChartContainer = styled.div`

  /* custom legend design */
  .c3-legend-item text {
    fill: ${({ theme }): string => theme.t};
    font-size: 80%;
  }

  /* other */
  .c3-text.c3-empty {
    fill: ${({ theme }): string => theme.t};
  }

  .c3-chart-arc text {
    fill: white;
  }
    /* tick */
  .domain {
    display: none;
  }
  .tick {
    fill: ${({ theme }): string => theme.t};
    font-weight: lighter;
  }

  /* c3 styles */
  .c3-lines-banned {
    fill: ${({ theme }): string => theme.p}20;
  }
  .c3-circle {
    fill: ${({ theme }): string => theme.p};
  }
`;
