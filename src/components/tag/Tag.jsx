// Importation des modules nécessaires :
import PropTypes from "prop-types";
import tagStyle from "./Tag.module.scss";

// Définition du composant Tag :
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

// Définition des types attendus pour les propriétés (props) du composant Tag :
Tag.propTypes = {
  dataTags: PropTypes.array.isRequired,
};

// Exportation du composant Tag pour qu'il puisse être utilisé ailleurs :
export default Tag;
