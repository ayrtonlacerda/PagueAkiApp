import { useState, useCallback, useEffect } from 'react';

export const useFetch = (fetch, id, trigger) => {
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
  }, [fetch, trigger, id]);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, id]);

  return [data, loading, error];
};
