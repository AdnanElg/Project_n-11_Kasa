// Importation des modules nécessaires :
import PropTypes from "prop-types";
import bannerStyle from "./Banner.module.scss";

// Définition du composant Banner :
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

// Définition des types attendus pour les propriétés (props) du composant Banner :
Banner.propTypes = {
  imgBanner: PropTypes.string.isRequired,
  titleBanner: PropTypes.string,
};

// Exportation du composant Banner pour qu'il puisse être utilisé ailleurs :
export default Banner;
