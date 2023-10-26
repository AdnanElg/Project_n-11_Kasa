import { HousingData } from "../data/HousingData.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useApiCallHousing = (id) => {
  const [apiState, setApiState] = useState({
    error: false,
    data: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const housingById = HousingData.find((databyId) => databyId.id === id);

      if (housingById) {
        setApiState({ loading: false, error: false, data: housingById });
      } else {
        navigate("/404");
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
