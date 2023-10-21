/* eslint-disable react/no-unescaped-entities */
import NotFoundStyle from "./NotFound.module.scss";
import Error from "../../components/error/Error.jsx";

const NotFound = () => {
  return (
    <main className={NotFoundStyle.container__notFound}>
      <Error />
    </main>
  );
};

export default NotFound;
