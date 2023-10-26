import { useApiCallHome } from "../../hook/useApiCallHome.jsx";
import Card from "../../components/card/Card.jsx";
import Banner from "../../components/banner/Banner.jsx";
import homeStyle from "./Home.module.scss";
import bannerHome from "../../assets/img/bannerHome.png";

const Home = () => {
  const { apiState } = useApiCallHome();

  return (
    <main className={homeStyle.container__main}>
      <Banner
        titleBanner="Chez vous, partout et ailleurs"
        imgBanner={bannerHome}
      />
      <section className={homeStyle.container__main__sectionCards}>
        {apiState.error && <p>Une erreur est survenue...</p>}
        {apiState.data?.length > 0 &&
          apiState.data.map((item) => (
            <Card
              key={item.id}
              dataCover={item.cover}
              dataTitle={item.title}
              dataId={item.id}
            />
          ))}
        {apiState.data === null && (
          <p>Votre requête ne correspond à aucune donnée.</p>
        )}
      </section>
    </main>
  );
};

export default Home;
