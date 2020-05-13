import * as React from 'react';

export function useLockBodyScroll(lock = true): void {
  React.useLayoutEffect(() => {
    if (lock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      // Re-enable scrolling when component unmounts.
      return (): void => { document.body.style.overflow = originalStyle; };
    }
  }, []); // Empty array ensures effect is only run on mount and unmount.
}

export function useLockRefScroll(ref: React.MutableRefObject<HTMLElement>): void {
  React.useLayoutEffect(() => {
    if (ref) {
      const originalStyle = ref.current.style.overflow;
      ref.current.style.overflow = 'hidden';
      return (): any => { ref.current.style.overflow = originalStyle; };
    }
  }, [ref]);
}
