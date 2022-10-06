import { useEffect, useState } from "react";

const useMultipleFetch = (urls) => {
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all(urls.map((url) => fetch(url)))
      .then((results) => Promise.all(results.map((result) => result.json())))
      .then((data) => setResult(data))
      .catch(() => setError(true))
      .finally(() => setIsLoaded(true));
  }, [urls]);

  return { result, error, isLoaded };
};

export default useMultipleFetch;
