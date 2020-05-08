import * as React from 'react';

export function useOutsideAlerter(ref: React.RefObject<HTMLElement>, f: () => void): void {
  React.useEffect(() => {
    // TODO: define type further
    function handleClickOutside(event: any): void {
      if (ref.current && !ref.current.contains(event.target)) {
        f();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
