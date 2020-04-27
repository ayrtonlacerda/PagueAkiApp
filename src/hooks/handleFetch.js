import { useCallback, useState, useEffect } from 'react';

export const useHandleFetch = (listen, set) => {
  const [request, setRequest] = useState({
    loading: false,
    success: null,
    error: null,
  });

  useEffect(() => {
    if (request.success) {
      set(request.success);
    }
  }, [request]);

  const handleFecth = useCallback(async (fetch, params, id) => {
    setRequest({ ...request, loading: true });
    try {
      const response = await fetch({ ...params }, id);
      setRequest({
        loading: false,
        error: false,
        success: response.data.data,
      });
    } catch (err) {
      setRequest({
        loading: false,
        error: err,
        response: null,
      });
    }
  }, [listen]);

  return [
    handleFecth, request.loading, request.success, request.error,
  ];
};
