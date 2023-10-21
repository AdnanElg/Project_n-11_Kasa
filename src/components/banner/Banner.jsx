import BannerStyle from "./Banner.module.scss";
import bannerHome from "../../assets/img/bannerHome.png";
import bannerAbout from "../../assets/img/bannerAbout.png";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section
      className={BannerStyle.section__banner}
      style={{
        background: isHomePage ? `url(${bannerHome})` : `url(${bannerAbout})`,
      }}
    >
      {isHomePage && <h1>Chez vous, partout et ailleurs</h1>}
    </section>
  );
};

export default Banner;
