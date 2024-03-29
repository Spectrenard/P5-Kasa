import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <Link to="/logement">Nos logements</Link>
    </div>
  );
}

export default Home;
