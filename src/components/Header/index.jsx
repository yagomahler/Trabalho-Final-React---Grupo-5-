import { useState } from "react";
import "./Header.module.css";
import { Link } from "react-router-dom";
import { Acessibilidade } from "../Acessibilidade";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="header-content">
          <a href="#" className="logo-link">
            <Link to={"/"}><span className="logo-icon">⚡</span> SerraTech Store</Link>
            
          </a>

          <div className="search-wrapper">
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">🔍 Buscar</button>
            </div>
          </div>

          <div className="nav-links">
            <a href="#" className="nav-link">
              <Link to={"/login"}>👤 Conta</Link>
              
            </a>
            <a href="#" className="nav-link">
              <Link to={"/sobre"}>❤️ Sobre</Link>
              
            </a>
            <a href="#" className="nav-link">
              <Link to={"/compras"}>🛒 Carrinho</Link>
              
              <span className="cart-badge">0</span>
            </a>
          </div>

          <Acessibilidade/>
        </div>
      </div>
    </nav>
  );
};

export default Header;
