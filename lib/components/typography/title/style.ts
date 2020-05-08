import styled, { css } from 'styled-components';

const sharedStyle = css<{ size: string; align: string }>`
  color: ${({ theme }): string => theme.t};
  font-size: ${({ size }): string => size};
  text-align: ${({ align }): string => align};
`;

export const H1 = styled.h1`
  ${sharedStyle}
`;
export const H2 = styled.h2`
  ${sharedStyle}
`;
export const H3 = styled.h3`
  ${sharedStyle}
`;
export const H4 = styled.h4`
  ${sharedStyle}
`;
export const H5 = styled.h5`
  ${sharedStyle}
`;
