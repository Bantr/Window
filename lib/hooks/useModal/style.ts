import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(75px);
  }
  to {
    transform: translateY(0);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  z-index: 1000; /* Should show above everything. */
`;

export const Container = styled.div`
  position: relative;
  width: auto;
  width: 500px;
  min-height: 200px;
  max-height: 400px;
  background-color: ${({ theme }): string => theme.sb};
  padding: 25px 25px 15px 25px;
  transition: 0.2s all ease-in-out;
  animation: ${slideIn} .2s ease-in-out alternate;
  box-shadow: 0 15px 40px 0 rgba(67,62,75,.3), 0 1px 15px 0 rgba(67,61,74,.15)
  p {
    text-align: left !important;
    margin-top: 15px;
  }
`;
