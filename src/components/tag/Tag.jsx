/* eslint-disable react/prop-types */
import TagStyle from "./Tag.module.scss";

const Tag = ({ dataTags }) => {
  return (
    <div className={TagStyle.container__tag}>
      {dataTags.map((item, index) => {
        return (
          <div key={index} className={TagStyle.tag}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
