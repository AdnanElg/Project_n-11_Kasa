/* eslint-disable react/prop-types */
import CarrouselStyle from "./Carrousel.module.scss";
import arrow_back from "../../assets/svg/arrow_back.svg";
import arrow_next from "../../assets/svg/arrow_next.svg";
import { useState } from "react";

const Carrousel = ({ dataPictures, dataTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataPictures.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataPictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={CarrouselStyle.carrouselGallery}>
      <span className={CarrouselStyle.arrowBack} onClick={goToPreviousSlide}>
        {dataPictures.length >= 2 && <img src={arrow_back} alt="arrow back" />}
      </span>
      {dataPictures.map((item, index) => {
        return (
          <img
            key={index}
            src={item}
            alt={`carrousel image ${index} de housing : ${dataTitle}`}
            className={
              index === currentIndex
                ? CarrouselStyle.visible
                : CarrouselStyle.hidden
            }
          />
        );
      })}
      <span className={CarrouselStyle.arrowNext} onClick={goToNextSlide}>
        {dataPictures.length >= 2 && <img src={arrow_next} alt="arrow next" />}
      </span>
    </div>
  );
};

export default Carrousel;
