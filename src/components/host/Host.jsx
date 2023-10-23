/* eslint-disable react/prop-types */
import HostStyle from "./Host.module.scss";

const Host = ({ dataHostName, dataHostPiture }) => {
  return (
    <div className={HostStyle.host}>
      <h3>{dataHostName}</h3>
      <img src={dataHostPiture} alt={`image ${dataHostName}`} />
    </div>
  );
};

export default Host;
