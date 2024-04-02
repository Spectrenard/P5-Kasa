import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import image1 from "../../assets/Image source 1.png";

function Home() {
  return (
    <div>
      <Banner imageSrc={image1} title="Chez vous, partout et ailleurs" />

      <div className="card-container">
        {data.map((property) => (
          <Card
            key={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
