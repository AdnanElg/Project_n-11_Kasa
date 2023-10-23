/* eslint-disable react/prop-types */
import CardStyle from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ dataCover, dataTitle, dataId }) => {
  return (
    <article className={CardStyle.container__card}>
      <Link to={`/housing/${dataId}`}>
        <img src={dataCover} alt={`Image ${dataTitle}`} />
        <div className={CardStyle.boxShadow}></div>
        <h3>{dataTitle}</h3>
      </Link>
    </article>
  );
};

export default Card;
