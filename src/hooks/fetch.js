import { useState, useCallback, useEffect } from 'react';

export const useFetch = (fetch, id, trigger) => {
  console.log({ refresh });
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(id);
      console.log({ response });
      setData(response.data);
    } catch (error) {
      console.log({ ERRO_REQUEST: { fetch, refresh, error } });
      setData(null);
    }
    setLoading(false);
  }, [fetch, refresh, id]);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, id]);

  return [data, loading];
};
