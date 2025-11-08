import { useState } from "react";
import "./Header.module.css";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="header-content">
          <a href="#" className="logo-link">
            <span className="logo-icon">⚡</span> SerraTech Store
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
              👤 Conta
            </a>
            <a href="#" className="nav-link">
              ❤️ Favoritos
            </a>
            <a href="#" className="nav-link">
              🛒 Carrinho
              <span className="cart-badge">0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
