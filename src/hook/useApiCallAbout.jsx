import { AboutData } from "../data/AboutData.json";
import { useEffect, useState } from "react";

export const useApiCallAbout = () => {
  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setApiState({ ...apiState, loading: true });
    try {
      if (!AboutData) {
        throw new Error("Error loading AboutData data");
      }
      console.log(AboutData);
      setApiState({ loading: false, error: false, data: AboutData });
    } catch (error) {
      console.log("An unexpected error occurred : " + error);
      setApiState({ loading: false, error: true, data: undefined });
    }
  }, []);

  return { apiState };
};
