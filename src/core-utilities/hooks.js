import { useState, useEffect } from "react";
import { API_KEY, SEARCH_ENGINE_CONTEXT_KEY } from "../core-utilities/keys";
import { populateCustomSearchParams } from "./Helpers/helpers";

export const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      let endpoint = populateCustomSearchParams(
        API_KEY,
        SEARCH_ENGINE_CONTEXT_KEY,
        term
      );
      fetch(endpoint)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchResult();
  }, [term]);
  return { data };
};
