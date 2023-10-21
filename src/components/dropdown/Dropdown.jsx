/* eslint-disable react/prop-types */
import arrow_top from "../../assets/svg/arrow_top.svg";
import { useState } from "react";
import DropdownStyle from "./Dropdown.module.scss";

const Dropdown = ({ dataTitle, dataDescription }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className={DropdownStyle.container}>
      <div className={DropdownStyle.dropdown}>
        <h3>{dataTitle}</h3>
        <img
          onClick={handleClick}
          src={arrow_top}
          alt={openDropdown ? "arrow bottom" : "arrow top"}
          // className={
          //   openDropdown ? DropdownStyle.toggleUp : DropdownStyle.toggleDown
          // }
          className={openDropdown ? DropdownStyle.toggleUp : ""}
        />
      </div>

      {/* <div
        className={`${DropdownStyle.content} ${
          openDropdown ? DropdownStyle.active : DropdownStyle.disabled
        }`}
      > */}

      {openDropdown && (
        <div
          className={`${DropdownStyle.content} ${
            openDropdown ? DropdownStyle.active : ""
          }`}
        >
          <p>{dataDescription}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
