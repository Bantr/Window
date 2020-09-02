import styled from 'styled-components';

export const NotificationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: width 0.2s ease-in-out;
  padding: 15px 5px;
  margin: 10px 0;
`;

export const Container = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0 15px 15px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.p}20;
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
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-image: url(${({ src }): string => src ? src : ''});
  background-size: contain;

  &.placeholder {
    border-radius: 50%;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  width: 310px;
  font-size: 13px;

  &.placeholder {
    width: 250px;
    height: 20px;
    padding: 0 15px;
  }
`;

export const TimeAgo = styled.div`
  color: ${({ theme }): string => theme.t}66;
  border: none;
  font-size: 12px;
  margin-right: 10px;

  &.placeholder {
    margin-top: 5px;
    margin-right: 10px;
    width: 50px;
    height: 20px;

    &.short {
      width: 30px;
    }
  }
`;

export const Option = styled.div``;
