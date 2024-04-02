import React from "react";
import "../../styles/_All.scss";
import "./_Card.scss";

function Card({ cover, title }) {
  return (
    <article className="card-logement">
      <img src={cover} alt="location" />
      <div className="card-logement-text">
        <p className="card-logement-title">{title}</p>
      </div>
    </article>
  );
}

export default Card;
