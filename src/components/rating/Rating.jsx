// Importation des modules nécessaires :
import PropTypes from "prop-types";
import ratingStyle from "./Rating.module.scss";

// Définition du composant Rating :
const Rating = ({ dataRating }) => {
  const startState = [1, 2, 3, 4, 5];

  return (
    <div className={ratingStyle.container__rating}>
      {startState.map((starIndex) => (
        <i
          key={starIndex}
          className={`fas fa-duotone fa-star ${
            starIndex <= parseInt(dataRating)
              ? ratingStyle.container__rating__pinkStar
              : ratingStyle.container__rating__grayStar
          }`}
        ></i>
      ))}
    </div>
  );
};

// Définition des types attendus pour les propriétés (props) du composant Rating :
Rating.propTypes = {
  dataRating: PropTypes.string.isRequired,
};

// Exportation du composant Rating pour qu'il puisse être utilisé ailleurs :
export default Rating;
