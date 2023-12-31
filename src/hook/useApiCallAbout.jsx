// Importation des modules nécessaires :
import { AboutData } from "../data/AboutData.json";
import { useEffect, useState } from "react";

// Définition du composant useApiCallAbout :
export const useApiCallAbout = () => {
  const [apiState, setApiState] = useState({
    error: false,
    data: null,
  });

  useEffect(() => {
    try {
      setApiState({ error: false, data: AboutData });
    } catch (error) {
      throw (
        (new Error("An unexpected error occurred : " + error),
        setApiState({ error: true, data: null }))
      );
    }
  }, []);

  return { apiState };
};
