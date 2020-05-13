import styled from 'styled-components';
import { opacify } from 'polished';

export const UserDropDown = styled.nav`
  position: absolute;
  top: 70px;
  left: -100px;
  right: 0;
  margin: 0 auto;
  width: 150px;
  background-color: ${({ theme }): string => theme.sb};
  height: 100px;
  transition: 0.15s transform ease-in-out;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 12px 11px ${({ theme }): string => theme.shadow}4D, 0 19px 4px ${({ theme }): string => theme.shadow}38;
`;

export const DropDownItem = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 15px);
  height: 30px;
  align-items: center;
  padding: 10px 0 10px 15px;
  border-radius: 5px;

  &:nth-child(even){
    background-color: ${({ theme }): string => theme.pb};
  }
  &:hover{
    opacity: 0.8;
  }

  .inner {
    display: flex;
    align-items: center;
  }

  .dropdown-icon {
    margin-right: 10px;
  }
`;

export const Line = styled.div`
  content: '';
  position: absolute;
  left: -3px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 25px;
  width: 6px;
  border-radius: 2px;
  background-color: ${({ theme }): string => theme.p};
`;
