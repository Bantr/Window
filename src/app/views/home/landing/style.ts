import styled, { keyframes } from 'styled-components';

const perspectiveAnimation = keyframes`
  from {
    transform: rotateX(0);
  }
  to {
    transform: rotateX(20deg);
  }
`;

export const Container = styled.section`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: row;

`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - 800px);
  padding: 25px 50px;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;

    strong {
      font-weight: 800;
      color: ${({ theme }) => theme.s};
      border-bottom: 6px solid ${({ theme }): string => theme.s};
      border-radius: 5px;
    }
  }

  p{
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 25px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 800px;
  max-width: 800px;

 /* Required to work on firefox */
  svg {
    width: 100%;
  }
`;

/*
=====================
currently not used
see ./index.tsx
=====================
*/
export const WindowContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  height: auto;
  margin: 0 auto;
  perspective: 1000px;
`;

export const Window = styled.div`
  width: 70%;
  height: auto;
  background-color: ${({ theme }): string => theme.pb};
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 5px;
  will-change: transform;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  animation: ${perspectiveAnimation} 1s 0s 1 ease-in-out forwards; /* duration, delay, iteration */

  img {
    width: 100%;
    height: auto;
  }
`;
