// Importation des modules nécessaires :
import notFoundStyle from "./NotFound.module.scss";
import Error from "../../components/error/Error.jsx";

// Définition du composant NotFound :
const NotFound = () => {
  return (
    <main className={notFoundStyle.container__notFound}>
      <Error />
    </main>
  );
};

// Exportation du composant NotFound pour qu'il puisse être utilisé ailleurs :
export default NotFound;
