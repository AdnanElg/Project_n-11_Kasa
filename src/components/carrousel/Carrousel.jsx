// Importation des modules nécessaires :
import PropTypes from "prop-types";
import carrouselStyle from "./Carrousel.module.scss";
import arrow_back from "../../assets/svg/arrow_back.svg";
import arrow_next from "../../assets/svg/arrow_next.svg";
import { useState } from "react";

// Définition du composant Carrousel :
const Carrousel = ({ dataPictures, dataTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour gérer le slide précédent :
  const handlePreviousSlide = () => {
    // Utilisation de la fonction setCurrentIndex pour mettre à jour l'indice de la diapositive actuelle.
    setCurrentIndex((prevIndex) =>
      // Vérification : Si l'indice actuel (prevIndex) est égal à 0, alors...
      prevIndex === 0
        // ...retournez la valeur de l'indice à la fin du tableau de données (dataPictures.length - 1),
        // sinon, décrémentez l'indice de 1 pour passer à la diapositive précédente.
        ? dataPictures.length - 1
        : prevIndex - 1
    );
  };

  // Fonction pour gérer le slide suivant :
  const handleNextSlide = () => {
    // Utilisation de la fonction setCurrentIndex pour mettre à jour l'indice de la diapositive actuelle.
    setCurrentIndex((prevIndex) =>
      // Vérification : Si l'indice actuel (prevIndex) est égal à la longueur du tableau de données moins 1, alors...
      prevIndex === dataPictures.length - 1
        // ...retournez l'indice à 0 pour revenir à la première diapositive,
        // sinon, incrémentez l'indice de 1 pour passer à la diapositive suivante.
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div className={carrouselStyle.container__carrouselGallery}>
      <span
        className={carrouselStyle.container__carrouselGallery__arrowBack}
        onClick={handlePreviousSlide}
      >
        {dataPictures.length > 1 && <img src={arrow_back} alt="arrow back" />}
      </span>
      {dataPictures.map((item, index) => {
        return (
          <img
            key={index}
            src={item}
            alt={`carrousel image ${index} de housing : ${dataTitle}`}
            className={
              index === currentIndex
                ? carrouselStyle.visible
                : carrouselStyle.hidden
            }
          />
        )
      })}
      <span
        className={carrouselStyle.container__carrouselGallery__arrowNext}
        onClick={handleNextSlide}
      >
        {dataPictures.length > 1 && <img src={arrow_next} alt="arrow next" />}
      </span>
      
     
      <p className={carrouselStyle.container__carrouselGallery__slideCount}>
        {currentIndex + 1}/{dataPictures.length}
      </p>
    </div>
  );
};

// Définition des types attendus pour les propriétés (props) du composant Carrousel :
Carrousel.propTypes = {
  dataPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTitle: PropTypes.string.isRequired,
};

// Exportation du composant Carrousel pour qu'il puisse être utilisé ailleurs :
export default Carrousel;
