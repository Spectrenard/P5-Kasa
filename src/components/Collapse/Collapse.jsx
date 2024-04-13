import React, { useState, useRef, useEffect } from "react";
import "./_Collapse.scss";
import vectorIcon from "./Vector.png";

function CollapseItem({ title, text }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      // Afficher le contenu avec une animation fluide
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      // Cacher le contenu avec une animation fluide
      contentRef.current.style.maxHeight = "0";
    }
  }, [open]);

  return (
    <div className={`collapse-item ${open ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
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
      <div className="collapse-content" ref={contentRef}>
        <ul>{text}</ul>
      </div>
    </div>
  );
}

export default CollapseItem;
