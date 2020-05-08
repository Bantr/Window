import * as React from 'react';
import styled from 'styled-components';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { lighten } from 'polished';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
`;

const Line = styled.div<{ p: number }>`
  width: 100%;
  position: absolute;
  height: 6px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  &:before{
    position: absolute;
    left: 0;
    content: '';
    background-color: ${({ theme }): string => lighten(0.2, theme.p)};
    width: ${({ p }): number => (p + 1)}px;
    height: 5px;
  }
`;
const Thumb = styled.div<{ isMouseDown: boolean }>`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }): string => theme.p};
  border-radius: 50%;
  transform: 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,box-shadow 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  box-shadow: ${({ isMouseDown, theme }): string => isMouseDown ? `0 0 0 15px ${theme.p}29` : 'none'};
  cursor: pointer;
  &:hover{
    box-shadow: ${({ isMouseDown, theme }): string => isMouseDown ? `0 0 0 15px ${theme.p}29` : `0 0 0 9px ${theme.p}29`};
  }
`;

export interface IProps {
  defaultValue?: number;
  max: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  onDragEnd?: (value: number) => void;
}

export const Range: React.FC<IProps> = ({ defaultValue, disabled = false, max, onDragEnd, onChange }) => {
  if (!defaultValue) {
    defaultValue = max / 2;
  }

  const [value, setValue] = React.useState<number>();
  const [isMouseDown, setMouseDown] = React.useState<boolean>(false);
  const [hadChange, setChange] = React.useState<boolean>(false);
  const [width, setWidth] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>();

  React.useLayoutEffect(() => {
    if (containerRef) {
      setWidth(containerRef.current.clientWidth);
    }
  }, []);

  function onDrag(e: DraggableEvent, data: DraggableData): void {
    if (!hadChange) {
      setChange(true);
    }
    console.log(data.lastX);
    setValue(data.lastX);
    if (typeof onDragEnd === 'function') {
      onChange(data.lastX / width * max);
    }
  }

  function onStop(e: DraggableEvent, data: DraggableData): void {
    setMouseDown(false);
    setValue(data.lastX);
    if (typeof onDragEnd === 'function') {
      onDragEnd(data.lastX / width * max);
    }
  }

  return (
    <Container ref={containerRef}>
      <Line p={hadChange ? value : defaultValue / max * width} />
      <Draggable
        allowAnyClick={false}
        axis="x"
        bounds="parent"
        disabled={disabled}
        onDrag={onDrag}
        onMouseDown={(): void => setMouseDown(true)}
        onStop={onStop}
        position={{ x: hadChange ? value : (defaultValue / max * width), y: 0 }}
        scale={1.1}
      >
        <Thumb
          isMouseDown={isMouseDown}
        />
      </Draggable>
    </Container>
  );
};
