import { keyframes } from 'styled-components';

export const ringAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  3%{
    transform: rotate(45deg)
  }
  6%{
    transform: rotate(-45deg);
  }
  8%{
    transform: rotate(45deg);
  }
  10%{
    transform: rotate(-45deg);
  }
  12%{
    transform: rotate(45deg);
  }
  14%{
    transform: rotate(-45deg);
  }
  16%{
    transform: rotate(25deg);
  }
  18%{
    transform: rotate(-20deg);
  }
  20%{
    transform: rotate(15deg);
  }
  22% {
    transform: rotate(-15deg);
  }
  24% {
    transform: rotate(15deg);
  }
  26% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;
