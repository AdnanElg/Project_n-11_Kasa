import PropTypes from "prop-types";
import cardStyle from "./Card.module.scss";
import { Link } from "react-router-dom";

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

Card.propTypes = {
  dataCover: PropTypes.string.isRequired,
  dataTitle: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
};

export default Card;
