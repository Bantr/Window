import styled from 'styled-components';

export const Image = styled.img<{ size: string }>`
  width: ${({ size }): string => size};
  height: ${({ size }): string => size};
  border-radius: 50%;
`;

export const ImagePlaceholder = styled.div<{ size: string }>`
  width: ${({ size }): string => size};
  height: ${({ size }): string => size};

  &.placeholder {
    border-radius: 50%;
  }

`;
