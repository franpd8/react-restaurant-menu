import logo from "../../assets/logo-2.png";
import search from "../../assets/search.png"
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <img src={logo} className="logo" />
        <nav>
          <a href="#"> Carta </a>
          <a href="#"> Reservas </a>
          <a href="#"> Contacto </a>
        </nav>
      </div>
      <div className="search">
        <img src={search} className="searchIcon" />
      </div>
    </div>
  );
};

export default Header;
