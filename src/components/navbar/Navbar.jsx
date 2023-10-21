import NavbarStyle from "./Navbar.module.scss";
import logoHeader from "../../assets/svg/logoHeader.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={NavbarStyle.container__header}>
      <nav>
        <img src={logoHeader} alt="logo kasa" />
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? NavbarStyle.active : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? NavbarStyle.active : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
