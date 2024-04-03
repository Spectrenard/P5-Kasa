// Logement.jsx
import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./_Logement.scss";
import Description from "../../components/Description/Description";
import Equipements from "../../components/Equipements/Equipements";
import Rate from "../../components/Rating/Rating";

function Logement() {
  const { id } = useParams(); // Récupérer l'ID du paramètre d'URL

  // Rechercher le logement correspondant dans les données
  const logement = data.find((log) => log.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const {
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = logement;

  return (
    <div className="logement">
      <img src={cover} alt={title} className="cover-image" />
      {/* Première ligne */}
      <div className="first-case">
        <div className="logInfos">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>

        <div className="host">
          {" "}
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} className="host-image" />
        </div>
      </div>
      {/* Deuxième ligne  */}
      <div className="second-case">
        <div>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="rate">
          <Rate rating={parseInt(rating)} />{" "}
          {/* Passer la note en tant que prop */}
        </div>
      </div>

      <div className="collapse">
        <div className="description">
          <Description logementId={id} />{" "}
          {/* Passer l'ID du logement en tant que prop */}
        </div>
        <div className="equipements">
          <Equipements logementId={id} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Logement;
