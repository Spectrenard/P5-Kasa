// Description.jsx
import CollapseItem from "../../components/Collapse/Collapse";
import data from "../../data/data.json";

function Equipements({ logementId }) {
  // Filtrer les données pour trouver le logement correspondant à l'ID spécifié
  const logement = data.find((log) => log.id === logementId);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  // Convertir les équipements en éléments <li>
  const equipementsList = logement.equipments.map((equipement, index) => (
    <li key={index}>{equipement}</li>
  ));

  return (
    <div>
      <CollapseItem
        title="Equipements" // Titre de la collapse
        text={<ul>{equipementsList}</ul>} // Liste des équipements dans des éléments <li>
      />
    </div>
  );
}

export default Equipements;
