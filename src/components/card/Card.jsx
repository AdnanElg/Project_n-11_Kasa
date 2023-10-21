/* eslint-disable react/prop-types */
import CardStyle from "./Card.module.scss";

const Card = ({ dataCover, dataTitle }) => {
  return (
    <article className={CardStyle.container__card}>
      <img src={dataCover} alt={`Image ${dataTitle}`} />
      <h3>{dataTitle}</h3>
    </article>
  );
};

export default Card;
