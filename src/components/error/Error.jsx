// Importation des modules nécessaires :
/* eslint-disable react/no-unescaped-entities */
import notFound from "../../assets/svg/notFound.svg";
import { NavLink } from "react-router-dom";
import errorStyle from "./Error.module.scss";

// Définition du composant Error :
const Error = () => {
  return (
    <section className={errorStyle.section__error}>
      <img src={notFound} alt="image 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <span>Retourner sur la page d'accueil</span>
      </NavLink>
    </section>
  );
};

// Exportation du composant Error pour qu'il puisse être utilisé ailleurs :
export default Error;
