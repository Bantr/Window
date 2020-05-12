import styled from 'styled-components';

export const UserDropDown = styled.nav`
  position: absolute;
  top: 70px;
  left: -100px;
  right: 0;
  margin: 0 auto;
  width: calc(150px - 10px);
  background-color: ${({ theme }): string => theme.pb};
  height: 100px;
  transition: 0.15s transform ease-in-out;
  border-radius: 5px;
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  box-shadow: 0 12px 11px ${({ theme }): string => theme.shadow}4D, 0 19px 4px ${({ theme }): string => theme.shadow}38;
`;

export const DropDownItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 30px;
  margin: 10px 0;
  align-items: center;

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
  left: -13px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 25px;
  width: 6px;
  border-radius: 2px;
  background-color: ${({ theme }): string => theme.p};
`;
