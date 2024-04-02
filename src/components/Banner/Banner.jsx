import React from "react";

import "../../styles/_All.scss";
import "./_Banner.scss";

function Banner({ imageSrc, title }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt="img" className="banner-image" />
      <div className="bannerText">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;
