import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h5 className="footer-brand">SerraTech Store</h5>
              <p className="footer-text">Sua loja de eletrônicos favorita</p>
            </div>
            <div>
              <h6>Atendimento</h6>
              <ul className="footer-list">
                <li>📞 (11) 9999-99999</li>
                <li>📧 contato@serratechstore.com</li>
                <li>💬 Chat Online</li>
              </ul>
            </div>
            <div>
              <h6>Redes Sociais</h6>
              <div className="footer-social">
                <a href="#" className="footer-link">
                  📘 Facebook
                </a>
                <a href="#" className="footer-link">
                  📷 Instagram
                </a>
                <a href="#" className="footer-link">
                  🐦 Twitter
                </a>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <p className="footer-copyright">
            © 2024 SerraTech Store. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
