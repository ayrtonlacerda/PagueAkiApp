import { useCallback, useState } from 'react';

export const useLazyFetch = (fetch, params = {}) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const load = useCallback(
    async (params2 = {}) => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await fetch({ ...params, ...params2 });
        setResponse(data);
      } catch (er) {
        setError(er);
        setResponse(null);
      }
      setLoading(false);
    },
    [params]
  );

  return [load, { loading, response, error }];
};
