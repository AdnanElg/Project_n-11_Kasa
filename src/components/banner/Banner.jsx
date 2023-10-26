import PropTypes from "prop-types";
import bannerStyle from "./Banner.module.scss";

const Banner = ({ imgBanner, titleBanner }) => {
  return (
    <section
      className={bannerStyle.section__banner}
      style={{
        background: `url(${imgBanner})`,
      }}
    >
      <h1>{titleBanner}</h1>
    </section>
  );
};

Banner.propTypes = {
  imgBanner: PropTypes.string.isRequired,
  titleBanner: PropTypes.string,
};

export default Banner;
