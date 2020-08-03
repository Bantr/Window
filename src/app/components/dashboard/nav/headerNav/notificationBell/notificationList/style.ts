import styled, { keyframes } from 'styled-components';

export const flyInAnimation = keyframes`
  from {
    transform: translateY(15px);
  }
  to {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: calc(50px + 12px);
  right: -27px;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 450px;
  height: '100%';
  min-height: '210px';
  max-height: '350px';
  border-radius: 10px;
  background-color: ${({ theme }): string => theme.pb};
  box-shadow: 0 12px 11px ${({ theme }): string => theme.shadow}4D, 0 19px 4px ${({ theme }): string => theme.shadow}38;
  transition: width 0.4s ease-in-out, height 0.2s linear;
  animation: ${flyInAnimation} .15s ease-in-out;
`;

export const NoNotifications = styled.div`
  width: 425px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
