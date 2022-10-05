import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setIsLoaded(true));
  }, [url]);

  return { data, error, isLoaded };
};

export default useFetch;
