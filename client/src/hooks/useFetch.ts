import { useState, useEffect, useCallback } from 'react';

export type FetchType<T> = {
  data: T | null;
  error: unknown | null;
  isLoading: boolean;
};

export const useFetch = <T>(url: string): FetchType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();

    try {
      setData(json);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
};
