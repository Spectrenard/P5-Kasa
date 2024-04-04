import React from "react";
import { useParams, Navigate } from "react-router-dom"; // Import de Navigate pour la redirection
import data from "../../data/data.json";
import "./_Logement.scss";
import Description from "../../components/Description/Description";
import Equipements from "../../components/Equipements/Equipements";
import Rate from "../../components/Rating/Rating";
import Carousel from "../../components/Carrousel/Carrousel";

function Logement() {
  const { id } = useParams(); // Récupérer l'ID du paramètre d'URL

  // Rechercher le logement correspondant dans les données
  const logement = data.find((log) => log.id === id);

  if (!logement) {
    return <Navigate to="</error>" />; // Redirection vers la page d'erreur
  }

  const {
    title,
    pictures, // Utiliser les images du logement à la place de la couverture unique
    host,
    rating,
    location,
    tags,
  } = logement;

  return (
    <div className="logement">
      <Carousel images={pictures} />{" "}
      {/* Utiliser le composant Carousel avec les images du logement */}
      {/* Première ligne */}
      <div className="all-infos">
        <div className="first-case">
          <div className="logInfos">
            <h2>{title}</h2>
            <p>{location}</p>
          </div>
          <div>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Deuxième ligne  */}
        <div className="second-case">
          <div className="host">
            <div className="headinfos">
              {" "}
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} className="host-image" />
            </div>

            <div className="rate">
              <Rate rating={parseInt(rating)} />{" "}
              {/* Passer la note en tant que prop */}
            </div>
          </div>
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
