import logo from "../../assets/logo-2.png";
import search from "../../assets/search.png"
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/home"><img src={logo} className="logo" /></Link>
        <nav>
         <Link to="/menu">Carta</Link>
         <Link to="/reservation">Reservas</Link>
         <Link to="/contact">Contacto</Link>
        </nav>
      </div>
      <div className="search">
        <img src={search} className="searchIcon" />
      </div>
    </div>
  );
};

export default Header;
