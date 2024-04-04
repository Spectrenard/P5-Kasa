import { NavLink } from "react-router-dom";
import logo from "./logo kasa.svg";
import "../../styles/_All.scss";
import "./_Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeclassname="active">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
