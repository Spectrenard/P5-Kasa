import logoFooter from "./LOGO.png";
import "./_Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="Kasa footer logo" />
      <p>©2020 Kasa. All rights reserved</p>
      <h1>By Sahin Elyesa👨🏻‍💻</h1>
    </div>
  );
}
export default Footer;
