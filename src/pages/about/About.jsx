import Banner from "../../components/banner/Banner.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";
import aboutStyle from "../about/About.module.scss";
import bannerAbout from "../../assets/img/bannerAbout.png";
import { useApiCallAbout } from "../../hook/useApiCallAbout.jsx";

const About = () => {
  const { apiState } = useApiCallAbout();

  return (
    <main className={aboutStyle.container__main}>
      <Banner imgBanner={bannerAbout} />
      {apiState.error && <p>Une erreur est survenue...</p>}
      <section>
        {apiState.data?.length > 0 &&
          apiState.data.map((item) => (
            <Collapse
              key={item.id}
              datatitle={item.title}
              dataDescription={item.description}
            />
          ))}
      </section>
      {apiState.data === null && (
        <p>Votre requête ne correspond à aucune donnée.</p>
      )}
    </main>
  );
};

export default About;
