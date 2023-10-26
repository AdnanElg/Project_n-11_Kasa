// Importation des modules nécessaires :
import PropTypes from "prop-types";
import hostStyle from "./Host.module.scss";

// Définition du composant Host :
const Host = ({ dataHostName, dataHostPiture }) => {
  return (
    <div className={hostStyle.container__host}>
      <h3>{dataHostName}</h3>
      <img src={dataHostPiture} alt={`image ${dataHostName}`} />
    </div>
  );
};

// Définition des types attendus pour les propriétés (props) du composant Host :
Host.propTypes = {
  dataHostName: PropTypes.string.isRequired,
  dataHostPiture: PropTypes.string.isRequired,
};

// Exportation du composant Host pour qu'il puisse être utilisé ailleurs :
export default Host;
