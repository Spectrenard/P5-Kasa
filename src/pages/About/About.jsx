import React from "react";
import image2 from "../../assets/Image source 2.png";
import Banner from "../../components/Banner/Banner";
import data from "../../data/collapse.json"; // Importez les données de data.json
import CollapseItem from "../../components/Collapse/Collapse";
import "./_About.scss";
function About() {
  return (
    <div className="full-page">
      <Banner imageSrc={image2} />
      {data.map((item, index) => (
        <CollapseItem
          key={index}
          title={item.aboutTitle} // Utilisez les données nécessaires provenant de data.json
          text={item.aboutText} // Utilisez les données nécessaires provenant de data.json
        />
      ))}
    </div>
  );
}

export default About;
