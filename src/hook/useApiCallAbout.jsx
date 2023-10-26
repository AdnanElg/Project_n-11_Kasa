import { AboutData } from "../data/AboutData.json";
import { useEffect, useState } from "react";

export const useApiCallAbout = () => {
  const [apiState, setApiState] = useState({
    error: false,
    data: null,
  });

  useEffect(() => {
    try {
      setApiState({ loading: false, error: false, data: AboutData });
    } catch (error) {
      throw (
        (new Error("An unexpected error occurred : " + error),
        setApiState({ loading: false, error: true, data: null }))
      );
    }
  }, []);

  return { apiState };
};
