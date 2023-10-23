import HousingStyle from "./Housing.module.scss";
import { useParams } from "react-router-dom";
import { useApiCallHousing } from "../../hook/useApiCallHousing.jsx";
import spinner from "../../assets/svg/spinner.svg";
import Carrousel from "../../components/carrousel/Carrousel.jsx";
import Location from "../../components/location/Location.jsx";
import Host from "../../components/host/Host.jsx";
import Tag from "../../components/tag/Tag.jsx";
import Rating from "../../components/rating/Rating.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";

const Housing = () => {
  const { id } = useParams();
  const { apiState } = useApiCallHousing(id);

  return (
    <main className={HousingStyle.container__main}>
      <section className={HousingStyle.section__housing}>
        {apiState.loading && <img src={spinner} alt="icône de chargement" />}
        {apiState.error && <p>Une erreur est survenue...</p>}
        {apiState.data && (
          <>
            <Carrousel
              key={apiState.data.id}
              dataPictures={apiState.data.pictures}
              dataTitle={apiState.data.title}
            />
            <div className={HousingStyle.content}>
              <Location
                key={apiState.data.id}
                dataTitle={apiState.data.title}
                dataLocation={apiState.data.location}
              />
              <Host
                key={apiState.data.id}
                dataHostName={apiState.data.host.name}
                dataHostPiture={apiState.data.host.picture}
              />
            </div>
            <div className={HousingStyle.content}>
              <Tag key={apiState.data.id} dataTags={apiState.data.tags} />
              <Rating
                key={apiState.data.id}
                dataRating={apiState.data.rating}
              />
            </div>
            <div className={HousingStyle.collapse}>
              <Collapse
                key={apiState.data.id}
                dataDescriptionHousing={apiState.data.description}
                titleDescription="Description"
              />
              <Collapse
                key={apiState.data.id}
                dataEquipment={apiState.data.equipments}
                titleEquipement="Équipements"
              />
            </div>
          </>
        )}
        {apiState.data === false && (
          <p>Votre requête ne correspond à aucune donnée.</p>
        )}
      </section>
    </main>
  );
};

export default Housing;
