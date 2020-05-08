import styled from 'styled-components';
import { ringAnimation } from './RingAnimation';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 24px;
  margin: 0 10px;
`;

export const BellIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &.animate {
    animation: ${ringAnimation} 15s ease-in-out infinite;
    animation-delay: 3s;
  }
`;

export const NotificationIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  content: '';
  top: -3px;
  right: 2px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }): string => theme.s};
`;
