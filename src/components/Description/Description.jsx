// Description.jsx
import CollapseItem from "../../components/Collapse/Collapse";
import data from "../../data/data.json";

function Description({ logementId }) {
  // Filtrer les données pour trouver le logement correspondant à l'ID spécifié
  const logement = data.find((log) => log.id === logementId);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <CollapseItem
        title="Description" // Titre de la collapse
        text={logement.description} // Description du logement correspondant à l'ID
      />
    </div>
  );
}

export default Description;
