import * as React from 'react';

export interface ICursorState {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}

const initState: ICursorState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN
};

export const useMouse = (): ICursorState => {
  const [state, setState] = React.useState(initState);

  React.useEffect(() => {
    const moveHandler = (event: MouseEvent): void => {
      const { screenX, screenY, clientX, clientY, pageX, pageY } = event;
      setState({ screenX, screenY, clientX, clientY, pageX, pageY });
    };
    document.addEventListener('mousemove', moveHandler);
    return (): void => {
      document.removeEventListener('mousemove', moveHandler);
    };
  }, []);
  return state;
};
