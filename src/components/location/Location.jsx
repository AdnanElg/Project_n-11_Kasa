import PropTypes from "prop-types";
import locationStyle from "./Location.module.scss";

const Location = ({ dataTitle, dataLocation }) => {
  return (
    <div className={locationStyle.container__location}>
      <h1>{dataTitle}</h1>
      <p>{dataLocation}</p>
    </div>
  );
};

Location.propTypes = {
  dataTitle: PropTypes.string.isRequired,
  dataLocation: PropTypes.string.isRequired,
};

export default Location;
