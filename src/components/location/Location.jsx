/* eslint-disable react/prop-types */
import LocationStyle from "./Location.module.scss";

const Location = ({ dataTitle, dataLocation }) => {
  return (
    <div className={LocationStyle.location}>
      <h1>{dataTitle}</h1>
      <p>{dataLocation}</p>
    </div>
  );
};

export default Location;
