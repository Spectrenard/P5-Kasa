import React from "react";
import image2 from "../../assets/Image source 2.png";
import Banner from "../../components/Banner/Banner";
import CollapseItem from "../../components/Collapse/Collapse";

function About() {
  return (
    <div>
      <Banner imageSrc={image2} title="A propos" />
      <CollapseItem />
    </div>
  );
}

export default About;
