import { useState } from "react";
import { Link } from "react-router-dom";
import { usaCarrinho } from "../../contexts/Contexto";
import { Acessibilidade } from "../Acessibilidade";
import { useUser } from "../../contexts/userContext";
import "./Header.module.css";


const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { carrinho } = usaCarrinho();
  const { usuarioLogado } = useUser();

  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <span className="logo-icon">💻</span> SerraTech Store
          </Link>

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
            <Link className="nav-link" to={usuarioLogado ? "/perfil" : "/login"}>
              👤 {usuarioLogado ? usuarioLogado.nome : "Conta"}
            </Link>
            <Link className="nav-link" to="/sobre">
              ❤️ Sobre
            </Link>
            <Link className="nav-link" to="/compras">
              🛒 Carrinho
              <span className="cart-badge">{carrinho.length}</span>
            </Link>
            <Acessibilidade />
          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Header;
