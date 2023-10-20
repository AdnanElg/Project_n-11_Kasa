import { useApiCall } from "../../hook/useApiCall.jsx";
import spinner from "../../assets/svg/spinner.svg";
import Card from "../../components/card/Card.jsx";
import BannerHome from "../../components/bannerHome/BannerHome.jsx";
import HomeStyle from "./Home.module.scss";

const Home = () => {
  const { apiState } = useApiCall();
  let content;

  if (apiState.loading) {
    content = <img src={spinner} alt="icône loading" />;
  } else if (apiState.error) {
    content = <p>Une erreur est survenue...</p>;
  } else if (apiState.data?.length > 0) {
    content = apiState.data.map((item) => (
      <Card key={item.id} itemData={item} />
    ));
  } else if (apiState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée.</p>;
  }
  return (
    <main className={HomeStyle.main}>
      <BannerHome />
      <section className={HomeStyle.section__cards}>{content}</section>
    </main>
  );
};

export default Home;
