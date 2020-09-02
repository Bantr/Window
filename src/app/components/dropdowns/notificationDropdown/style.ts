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
  top: 40px;
  right: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 450px;
  height: 90vh;
  border-radius: 10px;
  background-color: ${({ theme }): string => theme.pb};
  transition: width 0.4s ease-in-out, height 0.2s linear;
  animation: ${flyInAnimation} .15s ease-in-out;
  box-shadow: 0 12px 28px 0 rgba(0,0,0,0.2),0 2px 4px 0 rgba(0,0,0,0.14),inset 0 0 0 1px rgba(0,0,0,0.12);
`;

export const NoNotifications = styled.div`
  width: 450px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;

  h2 {
    padding: 0 15px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  h3 {
    font-weight: 700;
    padding: 0 15px;
  }

  .no-notification {
    padding: 0 15px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
