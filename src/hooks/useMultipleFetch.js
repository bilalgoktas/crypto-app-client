import { useEffect, useState } from "react";

const useMultipleFetch = (urls) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all(urls.map((url) => fetch(url)))
      .then((results) => Promise.all(results.map((result) => result.json())))
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setIsLoaded(true));
  }, [urls]);

  return { data, error, isLoaded };
};

export default useMultipleFetch;
