import PropTypes from "prop-types";
import arrow_top from "../../assets/svg/arrow_top.svg";
import { useState } from "react";
import collapseStyle from "./Collapse.module.scss";

const Collapse = ({ dataEquipment, dataDescription, datatitle }) => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <div className={collapseStyle.container}>
      <div className={collapseStyle.container__collapse}>
        <h3>{datatitle}</h3>
        <img
          onClick={handleClick}
          src={arrow_top}
          alt={openCollapse ? "arrow bottom" : "arrow top"}
          className={
            openCollapse ? collapseStyle.toggleUp : collapseStyle.toggleDown
          }
        />
      </div>

      <div
        className={`${collapseStyle.container__content} ${
          openCollapse ? collapseStyle.container__content__active : ""
        }`}
      >
        <div className={collapseStyle.container__content__text}>
          {openCollapse && dataDescription && <p>{dataDescription}</p>}
          {dataEquipment?.length > 0 && openCollapse && (
            <ul>
              {dataEquipment.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  dataEquipment: PropTypes.arrayOf(PropTypes.string),
  dataDescription: PropTypes.string,
  datatitle: PropTypes.string,
};

export default Collapse;
