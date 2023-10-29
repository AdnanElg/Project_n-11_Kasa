// Importation des modules nécessaires :
import { HousingData } from "../data/HousingData.json";
import { useEffect, useState } from "react";

// Définition du composant useApiCallHome :
export const useApiCallHome = () => {
  const [apiState, setApiState] = useState({
    error: false,
    data: null,
  });

  useEffect(() => {
    try {
      setApiState({ error: false, data: HousingData });
    } catch (error) {
      throw (
        (new Error("An unexpected error occurred : " + error),
        setApiState({ error: true, data: null }))
      );
    }
  }, []);

  return { apiState };
};
