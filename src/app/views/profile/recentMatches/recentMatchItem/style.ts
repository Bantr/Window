import styled, { keyframes } from 'styled-components';

const MatchItemHoverAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
  100%{
    transform: translateX(0);
  }
`;

// This has to be on top otherwise the animation wont work.
export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 100px 75px 100px 75px 200px 100px 50px;  /* 700px   --> Map, source, kills/deaths, K/R, Date, Result, arrow */
  width: 100%;
  padding: 10px 0;
  margin: 15px 0;
  text-align: center;
  background-color: ${({ theme }): string => theme.pb}bf;
  border-radius: 10px;
  gap: 5px;
  transition: all .1s ease-in-out;

   &:hover{
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 1px -2px;
    transform: translate3d(0, -2px, 0) scale(1.01);
    ${ArrowContainer}{
      animation: ${MatchItemHoverAnimation} .5s ease-in-out infinite alternate;
    }
   }

  .placeholder.source {
    border-radius: 50%;
    width: 25px;
    margin: 0 auto;
  }

  .placeholder {
    height: 25px;
    width: 80%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.kda {
    span {
    margin-left: 5px;
    margin-right: 5px;
    }
  }

  &.score {
    font-size: 1.075rem;
    font-weight: 500;
    &.win{
        color: ${({ theme }) => theme.s};
    }
  }
`;
