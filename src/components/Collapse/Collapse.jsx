import React, { useState, useRef, useEffect } from "react";
import data from "../../data/collapse.json";
import "./_Collapse.scss";
import vectorIcon from "./Vector.png";

function CollapseItem({ aboutTitle, aboutText }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      // Définir la hauteur maximale sur la hauteur réelle du contenu lorsqu'il est ouvert
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      // Réinitialiser la hauteur maximale lorsqu'il est fermé
      contentRef.current.style.maxHeight = "0";
    }
  }, [open]);

  return (
    <div className="collapse-item">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{aboutTitle}</h3>
        <img
          src={vectorIcon}
          alt="Vector"
          className={`chevron ${open ? "open" : ""}`}
          style={{
            transform: `rotate(${open ? "180deg" : "0"})`,
            transition: "transform 0.2s ease",
          }}
        />
      </div>
      <div
        className={`collapse-content ${open ? "open" : ""}`}
        ref={contentRef}
      >
        <p>{aboutText}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      {data.map((item, index) => (
        <CollapseItem
          key={index}
          aboutTitle={item.aboutTitle}
          aboutText={item.aboutText}
        />
      ))}
    </div>
  );
}

export default About;
