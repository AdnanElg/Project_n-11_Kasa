import FooterStyle from "./Footer.module.scss";
import logoFooter from "../../assets/svg/logoFooter.svg";

const Footer = () => {
  return (
    <footer className={FooterStyle.container__footer}>
      <img src={logoFooter} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
