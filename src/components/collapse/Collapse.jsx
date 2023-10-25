/* eslint-disable react/prop-types */
import arrow_top from "../../assets/svg/arrow_top.svg";
import { useState } from "react";
import CollapseStyle from "./Collapse.module.scss";

const Collapse = ({
  dataTitle,
  dataDescriptionAbout,
  dataEquipment,
  dataDescriptionHousing,
  titleDescription,
  titleEquipement,
}) => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <div className={CollapseStyle.container}>
      <div className={CollapseStyle.collapse}>
        <h3>
          {dataTitle}
          {titleDescription}
          {titleEquipement}
        </h3>
        <img
          onClick={handleClick}
          src={arrow_top}
          alt={openCollapse ? "arrow bottom" : "arrow top"}
          // className={
          //   openCollapse ? CollapseStyle.toggleUp : CollapseStyle.toggleDown
          // }
          className={openCollapse ? CollapseStyle.toggleUp : ""}
        />
      </div>

      {/* <div
        className={`${CollapseStyle.content} ${
          openCollapse ? CollapseStyle.active : CollapseStyle.disabled
        }`}
      > */}

      {openCollapse && (
        <div
          className={`${CollapseStyle.content} ${
            openCollapse ? CollapseStyle.active : ""
          }`}
        >
          <p>
            {dataDescriptionAbout}
            {dataDescriptionHousing}
            {dataEquipment?.length > 0 && (
              <ul>
                {dataEquipment.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
