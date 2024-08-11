import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading("Loading");
    fetch(`${BASE_URL}${url}`)
      .then((res) => {
        if (res.status !== 200)
          throw new Error(
            "There was an error while fetching: ErrorCode " + res.status
          );
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setData(null);
        setError(err.message);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
