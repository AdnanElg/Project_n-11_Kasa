import Banner from "../../components/banner/Banner.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";
import AboutStyle from "../about/About.module.scss";
import spinner from "../../assets/svg/spinner.svg";
import { useApiCallAbout } from "../../hook/useApiCallAbout.jsx";

const About = () => {
  const { apiState } = useApiCallAbout();

  return (
    <main className={AboutStyle.container__main}>
      <Banner />
      {apiState.loading && <img src={spinner} alt="icône de chargeement" />}
      {apiState.error && <p>Une erreur est survenue...</p>}
      <section>
        {apiState.data?.length > 0 &&
          apiState.data.map((item) => (
            <Collapse
              key={item.id}
              dataTitle={item.title}
              dataDescription={item.description}
            />
          ))}
      </section>
      {apiState.data?.length === 0 && (
        <p>Votre requête ne correspond à aucune donnée.</p>
      )}
    </main>
  );
};

export default About;
