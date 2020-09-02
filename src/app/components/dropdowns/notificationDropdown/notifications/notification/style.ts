import styled from 'styled-components';

export const OptionsContainer = styled.div<{ show: boolean, seen: boolean }>`
  position: absolute;
  display: ${({ show }) => show ? 'block' : 'none'};
  top: ${({ seen }): string => seen ? '5px' : '25px'};
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 300px;
  background-color: ${({ theme }) => theme.pb};
  border-radius: 10px;
  z-index: 2000;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;

  &:hover {
    border-radius: 10px;
  }
`;
export const Option = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 15px;

  .icon {
    margin-right: 15px;
  }
`;
