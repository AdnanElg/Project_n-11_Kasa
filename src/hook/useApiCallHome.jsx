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
      if (!HousingData) {
        throw new Error("Error loading housing data");
      }
      setApiState({ loading: false, error: false, data: HousingData });
      console.log(HousingData);
    } catch (error) {
      console.log("An unexpected error occurred : " + error);
      setApiState({ loading: false, error: true, data: null });
    }
  }, []);

  return { apiState };
};
