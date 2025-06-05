import { useState, useEffect } from 'react';

export function useQuery(requestParams) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryData = async () => {
      setLoading(true);
      try {
        const response = await fetch(requestParams.url, requestParams.body);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    if (requestParams) {
      queryData();
    }
  }, [requestParams]);

  return {
    loading,
    error,
    data,
  };
}