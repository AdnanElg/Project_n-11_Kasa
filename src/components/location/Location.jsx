// Importation des modules nécessaires :
import PropTypes from "prop-types";
import locationStyle from "./Location.module.scss";

// Définition du composant Location :
const Location = ({ dataTitle, dataLocation }) => {
  return (
    <div className={locationStyle.container__location}>
      <h1>{dataTitle}</h1>
      <p>{dataLocation}</p>
    </div>
  );
};

// Définition des types attendus pour les propriétés (props) du composant Location :
Location.propTypes = {
  dataTitle: PropTypes.string.isRequired,
  dataLocation: PropTypes.string.isRequired,
};

// Exportation du composant Location pour qu'il puisse être utilisé ailleurs :
export default Location;
