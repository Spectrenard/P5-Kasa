import React from "react";
import starFilled from "./star-active.png";
import starInactive from "./star-inactive 1.png";

function Rate({ rating }) {
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;

    // Boucle pour créer les étoiles
    for (let i = 1; i <= maxStars; i++) {
      // Utiliser l'image d'étoile remplie si l'indice est inférieur ou égal au rating
      // Sinon, utiliser l'image d'étoile inactive
      const starSrc = i <= rating ? starFilled : starInactive;

      stars.push(<img key={i} src={starSrc} alt="Star" />);
    }

    return stars;
  };

  return (
    <div className="card">
      <div className="rating">{renderStars(rating)}</div>
      {/* Autres éléments de la card */}
    </div>
  );
}

export default Rate;
