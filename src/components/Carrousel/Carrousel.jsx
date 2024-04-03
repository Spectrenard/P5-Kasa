import React, { useState, useEffect } from "react";
import "./_Carrousel.scss";
import left from "./left.png";
import right from "./right.png";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [singleImage, setSingleImage] = useState(false);

  // Préchargement des images au chargement du composant
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
    // Vérifier si le logement a une seule image
    if (images.length === 1) {
      setSingleImage(true);
    } else {
      setSingleImage(false);
    }
  }, [images]);

  const handleClickLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSlideDirection("slide-left"); // Appliquer la classe pour le glissement vers la gauche
    setTimeout(() => setSlideDirection(""), 200); // Réinitialiser la classe après un court délai (300ms)
  };

  const handleClickRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection("slide-right"); // Appliquer la classe pour le glissement vers la droite
    setTimeout(() => setSlideDirection(""), 200); // Réinitialiser la classe après un court délai (300ms)
  };

  return (
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className={`carousel-image ${slideDirection}`}
      />
      {!singleImage && (
        <>
          <div className="arrow left-arrow" onClick={handleClickLeft}>
            <img src={left} alt="Left arrow" />
          </div>
          <div className="arrow right-arrow" onClick={handleClickRight}>
            <img src={right} alt="Right arrow" />
          </div>
        </>
      )}
      {!singleImage && (
        <div className="image-number">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default Carousel;
