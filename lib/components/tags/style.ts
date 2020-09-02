import styled from 'styled-components';

interface IPosition {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export interface IDefaultProps {
  position?: IPosition;
}
export const Container = styled.div<{ position: IPosition }>`
  padding: 5px 10px;
  border: 2px solid ${({ theme }): string => theme.t};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 800;
  /* position */
  user-select: none;
  position: ${({ position }): string => position ? 'absolute' : 'relative'};
  ${({ position }): string => position && position.right ? `right: ${position.right}` : null};
  ${({ position }): string => position && position.top ? `top: ${position.top}` : null};
  ${({ position }): string => position && position.left ? `left: ${position.left}` : null};
  ${({ position }): string => position && position.bottom ? `bottom: ${position.bottom}` : null};

  .text {
    font-weight: 800;
  }
`;
