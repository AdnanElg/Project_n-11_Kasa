import { Housing } from "../data/HousingData.json";
import { useEffect, useState } from "react";

export const useApiCallHome = () => {
  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setApiState({ ...apiState, loading: true });
    try {
      if (!Housing) {
        throw new Error("Error loading housing data");
      }
      console.log(Housing);

      setApiState({ loading: false, error: false, data: Housing });
    } catch (error) {
      console.log("An unexpected error occurred : " + error);
      setApiState({ loading: false, error: true, data: undefined });
    }
  }, []);

  return { apiState };
};
