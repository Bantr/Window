import styled, { keyframes } from 'styled-components';

export const rippleEffect = keyframes`
  0% {
    transform: scale(0.5);
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

export const Input = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

export const Label = styled.label`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RadioButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  padding: 9px;
  position: relative;
`;

export const Button = styled.div<{ isSelected: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  .inner{
  transform: ${({ isSelected }): string => isSelected ? 'scale(1)' : 'scale(0)'} ;
  transition: transform 150ms cubic-bezier(0,0,0.2,1), fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  fill: ${({ theme }): string => theme.p};
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  }

  .outer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  fill: ${({ theme }): string => theme.p};
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const Ripple = styled.div`
  position: absolute;
  width: 85%;
  height:85%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 50%;
  background-color: ${({ theme }): string => theme.p};
  border: 1px solid ${({ theme }): string => theme.p};
  opacity: 0;
  transform: scale(0.5);
  &.animate{
    animation: ${rippleEffect} 0.4s ease-in-out forwards;
  }
`;
