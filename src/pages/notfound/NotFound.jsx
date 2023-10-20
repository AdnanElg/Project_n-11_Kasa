/* eslint-disable react/no-unescaped-entities */
import NotFoundStyle from "./NotFound.module.scss";
import notFound from "../../assets/svg/notFound.svg";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className={NotFoundStyle.main}>
      <section>
        <img src={notFound} alt="image 404" />
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">
          <span>Retourner sur la page d'accueil</span>
        </NavLink>
      </section>
    </main>
  );
};

export default NotFound;
