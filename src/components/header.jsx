import "../styles/header.css";
import logo from "../../LOGO.png"

export default function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
        <a href="/LOGO.jpg" target="_blank">
          <img src={logo} className="logo" alt="R3 logo" />
        </a>
      <nav className="nav">
        <a href="#about">Identidad</a>
        <a href="#values">Manifiesto</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
