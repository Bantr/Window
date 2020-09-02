import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  position: relative;
  cursor: pointer;
`;

export const AlertContainer = styled.div`
  position: absolute;
  top: -15px;
  right: -13px;

  svg {
    fill: ${({ theme }): string => theme.error};
  }
`;
