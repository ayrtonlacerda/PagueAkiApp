import { useState, useCallback, useEffect } from 'react';

export const useFetch = (fetch, id, refresh) => {
  console.log({ refresh });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(id);
      console.log({ response });
      setData(response.data);
    } catch (err) {
      console.log({ ERRO_REQUEST: { fetch, refresh, error } });
      setError(err);
    }
    setLoading(false);
  }, [fetch, refresh]);

  useEffect(() => {
    load();
  }, [refresh]);

  return [data, loading, error];
};
