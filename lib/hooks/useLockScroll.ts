import * as React from 'react';

export function useLockBodyScroll(): void {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return (): void => { document.body.style.overflow = originalStyle; };
  });
}

export function useLockRefScroll(ref: React.MutableRefObject<HTMLElement>): void {
  React.useLayoutEffect(() => {
    const originalStyle = ref.current.style.overflow;
    ref.current.style.overflow = 'hidden';
    return (): any => { ref.current.style.overflow = originalStyle; };
  }, [ref]);
}
