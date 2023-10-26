import PropTypes from "prop-types";
import hostStyle from "./Host.module.scss";

const Host = ({ dataHostName, dataHostPiture }) => {
  return (
    <div className={hostStyle.container__host}>
      <h3>{dataHostName}</h3>
      <img src={dataHostPiture} alt={`image ${dataHostName}`} />
    </div>
  );
};

Host.propTypes = {
  dataHostName: PropTypes.string.isRequired,
  dataHostPiture: PropTypes.string.isRequired,
};

export default Host;
