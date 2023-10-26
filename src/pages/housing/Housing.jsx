import housingStyle from "./Housing.module.scss";
import { useParams } from "react-router-dom";
import { useApiCallHousing } from "../../hook/useApiCallHousing.jsx";
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
    <main className={housingStyle.container__main}>
      <section className={housingStyle.container__main__sectionHousing}>
        {apiState.error && <p>Une erreur est survenue...</p>}
        {apiState.data && (
          <>
            <Carrousel
              dataPictures={apiState.data.pictures}
              dataTitle={apiState.data.title}
            />
            <div
              className={
                housingStyle.container__main__sectionHousing__containerContent
              }
            >
              <div
                className={
                  housingStyle.container__main__sectionHousing__containerContent__propertyInfoContainer
                }
              >
                <Location
                  dataTitle={apiState.data.title}
                  dataLocation={apiState.data.location}
                />
                <Tag dataTags={apiState.data.tags} />
              </div>
              <div
                className={
                  housingStyle.container__main__sectionHousing__containerContent__hostInfoContainer
                }
              >
                <Host
                  dataHostName={apiState.data.host.name}
                  dataHostPiture={apiState.data.host.picture}
                />
                <Rating dataRating={apiState.data.rating} />
              </div>
            </div>
            <div
              className={housingStyle.container__main__sectionHousing__collapse}
            >
              <Collapse
                dataDescription={apiState.data.description}
                datatitle="Description"
              />
              <Collapse
                dataEquipment={apiState.data.equipments}
                datatitle="Équipements"
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
