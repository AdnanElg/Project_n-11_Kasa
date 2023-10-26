// Importation des modules nécessaires :
import navbarStyle from "./Navbar.module.scss";
import logoHeader from "../../assets/svg/logoHeader.svg";
import { NavLink } from "react-router-dom";

// Définition du composant Navbar :
const Navbar = () => {
  return (
    <header className={navbarStyle.container__header}>
      <nav>
        <NavLink to="/">
          <img src={logoHeader} alt="logo kasa" />
        </NavLink>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? navbarStyle.active : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? navbarStyle.active : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

// Exportation du composant Navbar pour qu'il puisse être utilisé ailleurs :
export default Navbar;
