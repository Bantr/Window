import * as React from 'react';
import * as Sentry from '@sentry/react';

export function useSessionStorage<T>(key: string, initialValue: T): [any, (value: any) => void] {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      Sentry.captureException(e);
      return initialValue;
    }
  });

  const setValue = (value: any): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      Sentry.captureException(e);
    }
  };
  return [storedValue, setValue];
}
