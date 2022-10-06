import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch(() => setError(true))
      .finally(() => setIsLoaded(true));
  }, [url]);

  return { result, error, isLoaded };
};

export default useFetch;
