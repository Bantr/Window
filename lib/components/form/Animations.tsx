import { keyframes } from 'styled-components';

export const rippleEffect = keyframes`
  0% {
    transform: scale(0.6);
    opacity: 0.2;
  }

  50% {
    opacity: 0.2;
  }

  80% {
    transform: scale(1);
  }
  90%{
    transform: scale(1);
  }
  100%{
    opacity: 0;
    transform: scale(1);
  }
`;

export const infiniteRipple = keyframes`

  0% {
    transform: scale(0.6);
    opacity: 0.2;
  }
  5% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  10% {
    opacity: 0.1;
    transform: scale(1);
  }
  15%{
    transform: scale(1.2);
    opacity: 0;
  }
  20%{
    opacity: 0;
    transform: scale(0.6);
  }
  100%{
    opacity: 0;
    transform: scale(0.6);
  }
`;
