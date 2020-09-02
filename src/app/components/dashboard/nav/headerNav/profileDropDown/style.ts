import styled from 'styled-components';

export const DropDown = styled.nav`
  margin-top: 10px;
  width: 175px;
  height: 100px;
  background-color: ${({ theme }): string => theme.sb};
  transition: 0.15s transform ease-in-out;
  border-radius: 5px;
  display: flex;
  z-index: 10000;
  flex-direction: column;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
`;

export const DropDownItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 10px 0 10px 15px;
  border-radius: 5px;
  cursor: pointer;

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

  .icon {
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
