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
              dataPictures={apiState.data.pictures}
              dataTitle={apiState.data.title}
            />
            <div className={HousingStyle.containerContent}>
              <div className={HousingStyle.propertyInfoContainer}>
                <Location
                  dataTitle={apiState.data.title}
                  dataLocation={apiState.data.location}
                />
                <Tag dataTags={apiState.data.tags} />
              </div>
              <div className={HousingStyle.hostInfoContainer}>
                <Host
                  dataHostName={apiState.data.host.name}
                  dataHostPiture={apiState.data.host.picture}
                />
                <Rating dataRating={apiState.data.rating} />
              </div>
            </div>
            <div className={HousingStyle.collapse}>
              <Collapse
                dataDescriptionHousing={apiState.data.description}
                titleDescription="Description"
              />
              <Collapse
                dataEquipment={apiState.data.equipments}
                titleEquipement="Équipements"
              />
            </div>
          </>
        )}
        {apiState.data === null && (
          <p>Votre requête ne correspond à aucune donnée.</p>
        )}
      </section>
    </main>
  );
};

export default Housing;
