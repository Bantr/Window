import styled from 'styled-components';

export const ReferenceContainer = styled.div<{ isOpen: boolean, isPrimary: boolean }>`
  position: relative;
  min-width: 150px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme, isPrimary }) => isPrimary ? theme.pb : theme.sb};
  padding: ${({ isOpen }): string => isOpen ? '15px 25px' : '15px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-radius .2s ease-in, padding .3s ease-in-out;
  border-radius: ${({ isOpen }): string => isOpen ? '10px 10px 0 0' : '10px'};
  cursor: pointer;
`;

export const PopperContainer = styled.div<{ isOpen: boolean, minWidth: number, isPrimary: boolean }>`
  transition: opacity .3s linear;
  visibility: ${({ isOpen }): string => isOpen ? 'visible' : 'hidden'};
  opacity: ${({ isOpen }): number => isOpen ? 1 : 0};
  min-width: ${({ minWidth }): string => `${minWidth}px`};
  max-height: 400px;
  overflow-y: auto;
  height: auto;
  z-index: 10000;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 12px 11px ${({ theme }): string => theme.shadow}4D, 0 19px 4px ${({ theme }): string => theme.shadow}38;
  select {
    display: none;
  }
  background-color: ${({ theme, isPrimary }): string => isPrimary ? theme.pb : theme.sb};
`;

export const ArrowContainer = styled.div<{ isOpen: boolean }>`
  .icon {
  margin-left: 20px;
  margin-right: -5px;
  transition: transform .3s ease-in-out;
  fill: ${({ theme }): string => theme.t};
  transform: ${({ isOpen }) => isOpen ? 'rotate(270deg)' : 'rotate(90deg)'};
  }
`;

export const Option = styled.div<{ isPrimary: boolean, selected: boolean }>`
  width: 100%;
  cursor: pointer;
  padding: 15px 25px;

  /*
    if selected && primary --> theme.p
    if selected && !primary --> theme.s
    if !selected --> no background-color
  */
  background-color: ${({ theme, selected }): string => selected ? theme.p : 'transparent'};
  color: ${({ theme, selected }): string => selected ? 'white' : theme.t};

  &:hover {
    background-color: ${({ theme, isPrimary, selected }): string => selected ? theme.p : isPrimary ? theme.sb : theme.pb};
  }
`;
