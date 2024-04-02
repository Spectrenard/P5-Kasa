import { Link } from "react-router-dom";
import "./_Error.scss";

function Error404() {
  return (
    <div className="errorStyle">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas😪</p>

      <Link to="/">Mener vers la page d'accueil</Link>
    </div>
  );
}

export default Error404;
