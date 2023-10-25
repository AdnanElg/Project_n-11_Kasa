import { useApiCallHome } from "../../hook/useApiCallHome.jsx";
import spinner from "../../assets/svg/spinner.svg";
import Card from "../../components/card/Card.jsx";
import Banner from "../../components/banner/Banner.jsx";
import HomeStyle from "./Home.module.scss";

const Home = () => {
  const { apiState } = useApiCallHome();

  return (
    <main className={HomeStyle.container__main}>
      <Banner />
      <section className={HomeStyle.section__cards}>
        {apiState.loading && <img src={spinner} alt="icône de chargeement" />}
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
