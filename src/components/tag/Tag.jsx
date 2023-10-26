import PropTypes from "prop-types";
import tagStyle from "./Tag.module.scss";

const Tag = ({ dataTags }) => {
  return (
    <div className={tagStyle.container}>
      {dataTags.map((item, index) => {
        return (
          <div key={index} className={tagStyle.container__tag}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

Tag.propTypes = {
  dataTags: PropTypes.array.isRequired,
};

export default Tag;
