import notFoundStyle from "./NotFound.module.scss";
import Error from "../../components/error/Error.jsx";

const NotFound = () => {
  return (
    <main className={notFoundStyle.container__notFound}>
      <Error />
    </main>
  );
};

export default NotFound;
