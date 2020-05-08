import styled from 'styled-components';
import { rippleEffect } from '../Animations';

export const ToggleContainer = styled.div`
  position: relative;
  width: 30px;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;
`;

export const ToggleComponent = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #cccccc;
  border-radius: 20px;
  margin: 0;
`;

export const Inner = styled.span<{ isChecked: boolean }>`
  display: block;
  width: 100%;
  height: 9px;
  background-color: ${({ isChecked, theme }): string => isChecked ? theme.p : theme.pb};
  transition: background-color 0.3s ease-in-out;
  transition-delay: 0.1s;
`;
export const Switch = styled.span<{ isChecked: boolean }>`
  display: block;
  width: 18px;
  height: 18px;
  background-color: ${({ theme }): string => theme.dark ? '#ffffff' : '#D4D4D4'};
  position: absolute;
  margin-top: -4.5px;
  top: 0;
  bottom: 0;
  right: ${({ isChecked }): string => isChecked ? '0px' : '20px'};
  border-radius: 20px;
  transition: all 0.2s ease-in 0s;
`;

export const Ripple = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  right: -7.5px;
  border-radius: 50%;
  background-color: ${({ theme }): string => theme.dark ? theme.p : '#D4D4D4'};
  border: 1px solid ${({ theme }): string => theme.dark ? theme.p : '#D4D4D4'};
  opacity: 0;
  transform: scale(0.5);
  &.animate{
    animation: ${rippleEffect} 0.4s ease-in-out forwards;
  }
`;
