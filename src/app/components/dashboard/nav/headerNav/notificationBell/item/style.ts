import styled, { keyframes } from 'styled-components';
import { infiniteRipple } from 'lib/components/form/Animations';

const deleteAnimation = keyframes`
  0%{
    transform: translateX(0);
    padding: 10px;
    height: 50px;
  }
  40%{
    transform: translateX(-500px);
    height: 50px;
  }
  100%{
    transform: translateX(-500px);
    padding: 0;
    height: 0;
  }
`;

// required to be above container to change style based on hover of notificationcontainer
export const DeleteContainer = styled.div`
  width: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.2s ease-in-out;
`;

export const DeleteIconContainer = styled.div<{ isOdd: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }): string => theme.p};
  background-color: ${({ isOdd, theme }): string => isOdd ? theme.pb : theme.sb};
  transition: transform 0.2s ease-in-out;

  &:hover{
    transform: rotate(90deg);
  }
`;

export const NotificationContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: width 0.2s ease-in-out;
`;

export const Container = styled.div<{ isOdd: boolean }>`
  position: relative;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px 10px 10px;
  width: 450px;
  background-color: ${({ isOdd, theme }): string => isOdd ? theme.sb : theme.pb};
  &:hover ${DeleteContainer}{
    width: 25px;
  }
  &:hover ${NotificationContainer}{
    width: 400px;
  }

  &.placeholder-container {
    &:hover ${NotificationContainer}{
      width: 425px;
    }
  }

  &.delete-animation {
    animation: ${deleteAnimation} .8s ease-in-out forwards;
  }

`;

export const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div<{ src: string }>`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-image: url(${({ src }): string => src ? src : ''});
  background-size: contain;

  &.placeholder {
    border-radius: 50%;
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  width: 200px;
  font-size: 13px;

  &.placeholder {
    height: 20px;
    padding: 0 15px;
  }
`;

export const TimeAgo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }): string => theme.t}66;
  border: none;
  font-size: 12px;
  margin-left: auto;
  margin-right: 10px;

  &.placeholder {
    width: 50px;
    height: 20px;
  }
`;

export const NewNotification = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme }): string => theme.s};
  overflow: visible;
`;

export const Ripple = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  bottom: 0;
  right: -6px;
  margin: auto;
  border-radius: 50%;
  background-color: ${ ({ theme }): string => theme.s};
  border: 1px solid ${ ({ theme }): string => theme.s};
  opacity: 0;
  transform: scale(0.5);
  animation: ${infiniteRipple} 4s ease-in-out forwards infinite;
`;
