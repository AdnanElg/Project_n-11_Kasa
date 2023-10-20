/* eslint-disable react/prop-types */
import "./Card.module.scss";

const Card = ({ itemData }) => {
  return (
    <article>
      <img
        src={itemData.cover}
        alt={`Image ${itemData.title} à ${itemData.location}`}
      />
      <h3>{itemData.location}</h3>
    </article>
  );
};

export default Card;
