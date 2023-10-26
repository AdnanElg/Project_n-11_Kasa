import PropTypes from "prop-types";
import ratingStyle from "./Rating.module.scss";

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

Rating.propTypes = {
  dataRating: PropTypes.string.isRequired,
};

export default Rating;
