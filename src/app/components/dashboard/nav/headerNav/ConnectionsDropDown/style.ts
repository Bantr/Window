import styled from 'styled-components';

export const DropDown = styled.div`
  position: absolute;
  cursor: default;
  display: flex;
  flex-direction: column;
  top: 95px;
  right: 0;
  width: 400px;
  height: 250px;
  padding: 20px;
  background-color: ${({ theme }): string => theme.pb};
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  overflow: hidden;
  border-radius: 5px;
`;
