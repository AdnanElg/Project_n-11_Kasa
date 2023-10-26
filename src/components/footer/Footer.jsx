// Importation des modules nécessaires :
import footerStyle from "./Footer.module.scss";
import logoFooter from "../../assets/svg/logoFooter.svg";

// Définition du composant Footer :
const Footer = () => {
  return (
    <footer className={footerStyle.container__footer}>
      <img src={logoFooter} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

// Exportation du composant Footer pour qu'il puisse être utilisé ailleurs :
export default Footer;
