import * as React from 'react';
import * as Sentry from '@sentry/react';

export function useLocalStorage<T>(key: string, initialValue: T): [any, (value: any) => void] {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      // TODO: notify user something went wrong?
      Sentry.captureException(e);
      return initialValue;
    }
  });

  const setValue = (value: any): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      Sentry.captureException(e);
      // notify user something went wrong
    }
  };
  return [storedValue, setValue];
}
