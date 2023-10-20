import BannerAbout from "../../components/bannerAbout/BannerAbout.jsx";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import AboutStyle from "../about/About.module.scss";
import spinner from "../../assets/svg/spinner.svg";
import { useApiCallAbout } from "../../hook/useApiCallAbout.jsx";

const About = () => {
  const { apiState } = useApiCallAbout();
  let content;

  if (apiState.loading) {
    content = <img src={spinner} alt="icône loading" />;
  } else if (apiState.error) {
    content = <p>Une erreur est survenue...</p>;
  } else if (apiState.data?.length > 0) {
    content = apiState.data.map((item) => (
      <Dropdown key={item.id} itemData={item} />
    ));
  } else if (apiState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée.</p>;
  }

  return (
    <main className={AboutStyle.main}>
      <BannerAbout />
      {content}
    </main>
  );
};

export default About;
