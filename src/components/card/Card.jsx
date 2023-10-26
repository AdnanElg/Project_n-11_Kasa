// Importation des modules nécessaires :
import PropTypes from "prop-types";
import cardStyle from "./Card.module.scss";
import { Link } from "react-router-dom";

// Définition du composant Card
const Card = ({ dataCover, dataTitle, dataId }) => {
  return (
    <article className={cardStyle.container__card}>
      <Link to={`/housing/${dataId}`}>
        <img src={dataCover} alt={`Image ${dataTitle}`} />
        <div className={cardStyle.container__card__boxShadow}></div>
        <h3>{dataTitle}</h3>
      </Link>
    </article>
  );
};

// Définition des types attendus pour les propriétés (props) du composant Card :
Card.propTypes = {
  dataCover: PropTypes.string.isRequired,
  dataTitle: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
};

// Exportation du composant Card pour qu'il puisse être utilisé ailleurs :
export default Card;
