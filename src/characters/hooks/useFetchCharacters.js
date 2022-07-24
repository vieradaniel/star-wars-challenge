import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCharacters = (url) => {
  const [data, setData] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setCharacters(response.data.results);
        
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error,characters };
};
