import * as React from 'react';

interface IReturn {
  execute: () => void;
  pending: boolean;
  value: any;
  error: Error;
}

export const useAsync = (async: Promise<Response>, immediate = true): IReturn => {
  const [pending, setPending] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<any>(null);
  const [error, setError] = React.useState<Error>(null);

  const execute = React.useCallback(() => {
    setPending(true);
    setValue(null);
    setError(null);
    return async.then((response: any): void => setValue(response))
      .catch((error: Error) => setError(error))
      .finally(() => setPending(false));
  }, [async]);

  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, pending, value, error };
};
