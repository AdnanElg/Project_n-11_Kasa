/* eslint-disable react/prop-types */
import RatingStyle from "./Rating.module.scss";

const Rating = ({ dataRating }) => {
  const startState = [1, 2, 3, 4, 5];

  return (
    <div className={RatingStyle.container}>
      {startState.map((starIndex) => (
        <i
          key={starIndex}
          className={`fas fa-duotone fa-star ${
            starIndex <= parseInt(dataRating)
              ? RatingStyle.pinkStar
              : RatingStyle.grayStar
          }`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
