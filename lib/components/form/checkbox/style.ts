import styled from 'styled-components';
import { rippleEffect } from '../Animations';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.label`
  margin-left: 25px;
  cursor: pointer;
  user-select: none;
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;

// this is the container
export const CheckboxContainer = styled.div <{ isChecked?: boolean }>`
  display: flex;
  position: relative;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ isChecked, theme }): string => isChecked ? theme.p : theme.placeholder};
  border-radius: 4px;
  background-color: ${({ isChecked, theme }): string => isChecked ? theme.p : 'transparent'};
  transition: box-shadow .125s linear, border-color .15s linear;
  cursor: pointer;
  overflow: visible;

  &.placeholder {
    border: none; /* Otherwise the border does not have the animation */
    border-radius: 4px;
    width: 27px;
    height: 27px;
    cursor: default;
  }
`;

export const CheckMarkContainer = styled.div<{ isChecked: boolean }>`
  display: ${({ isChecked }): string => isChecked ? 'flex' : 'none'};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Ripple = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
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
