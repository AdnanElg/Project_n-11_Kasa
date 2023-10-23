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
      if (!HousingData) {
        throw new Error("Error loading housing data");
      }
      const housingById = HousingData.find((databyId) => databyId.id === id);
      if (housingById) {
        setApiState({ loading: false, error: false, data: housingById });
        console.log(housingById);
      } else {
        throw new Error("No housing found with this ID");
      }
    } catch (error) {
      console.log("An unexpected error occurred : " + error);
      setApiState({ loading: false, error: true, data: null });
    }
  }, []);

  return { apiState };
};
