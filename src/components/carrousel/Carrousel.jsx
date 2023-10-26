import PropTypes from "prop-types";
import carrouselStyle from "./Carrousel.module.scss";
import arrow_back from "../../assets/svg/arrow_back.svg";
import arrow_next from "../../assets/svg/arrow_next.svg";
import { useState } from "react";

const Carrousel = ({ dataPictures, dataTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataPictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataPictures.length - 1 ? 0 : prevIndex + 1
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
        );
      })}
      <span
        className={carrouselStyle.container__carrouselGallery__arrowNext}
        onClick={handleNextSlide}
      >
        {dataPictures.length > 1 && <img src={arrow_next} alt="arrow next" />}
      </span>
    </div>
  );
};

Carrousel.propTypes = {
  dataPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTitle: PropTypes.string.isRequired,
};

export default Carrousel;
