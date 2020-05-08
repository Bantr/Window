import styled from 'styled-components';

export const Center = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }): string => width ? width : '100%'};
  height: 100vh;
`;
