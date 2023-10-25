import { HousingData } from "../data/HousingData.json";
import { useEffect, useState } from "react";

export const useApiCallHome = () => {
  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    setApiState({ ...apiState, loading: true });
    try {
      setApiState({ loading: false, error: false, data: HousingData });
    } catch (error) {
      throw (
        (new Error("An unexpected error occurred : " + error),
        setApiState({ loading: false, error: true, data: null }))
      );
    }
  }, []);

  return { apiState };
};
