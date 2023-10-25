import { HousingData } from "../data/HousingData.json";
import { useEffect, useState } from "react";

export const useApiCallHousing = (id) => {
  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    setApiState({ ...apiState, loading: true });
    try {
      const housingById = HousingData.find((databyId) => databyId.id === id);

      if (housingById) {
        setApiState({ loading: false, error: false, data: housingById });
      }
    } catch (error) {
      throw (
        (new Error("An unexpected error occurred : " + error),
        setApiState({ loading: false, error: true, data: null }))
      );
    }
  }, []);

  return { apiState };
};
