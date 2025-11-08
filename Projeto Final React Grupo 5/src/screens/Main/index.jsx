import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
    // Exemplo de como buscar produtos da API:
    // async function fetchProducts() {
    //   try {
    //     const response = await fetch('API_URL');
    //     const data = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Erro ao buscar produtos:', error);
    //   }
    // }
    // fetchProducts();
  }, []);

  const categories = [
    { id: "all", name: "Todos os Produtos", icon: "📦" },
    { id: "computadores", name: "Computadores", icon: "💻" },
    { id: "notebooks", name: "Notebooks", icon: "🖥️" },
    { id: "periféricos", name: "Periféricos", icon: "⌨️" },
    { id: "smartphones", name: "Smartphones", icon: "📱" },
    { id: "tvs", name: "TVs", icon: "📺" },
    { id: "audio", name: "Áudio", icon: "🎧" },
    { id: "games", name: "Games", icon: "🎮" },
  ];

  const clearFilters = () => {
    setPriceRange({ min: 0, max: 10000 });
    setSelectedCategory("all");
  };

  return (
    <div className="home-container">
      <div className="categories-bar">
        <div className="categories-container">
          <div className="categories-scroll">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-btn ${
                  selectedCategory === cat.id
                    ? "category-btn-active"
                    : "category-btn-inactive"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="main-grid">
          {}
          <div>
            <div className="filters-card">
              <h5 className="filters-header">🔧 Filtros</h5>
              <div className="filters-body">
                {}
                <div className="filter-section">
                  <h6 className="filter-title">Faixa de Preço</h6>
                  <div className="price-input-wrapper">
                    <label className="price-label">
                      Mínimo: R$ {priceRange.min}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          min: parseInt(e.target.value),
                        })
                      }
                      className="price-range"
                    />
                  </div>
                  <div>
                    <label className="price-label">
                      Máximo: R$ {priceRange.max}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          max: parseInt(e.target.value),
                        })
                      }
                      className="price-range"
                    />
                  </div>
                </div>

                {}
                <div className="filter-section">
                  <h6 className="filter-title">Marcas</h6>
                  {["Samsung", "Apple", "LG", "Sony"].map((brand) => (
                    <div key={brand} className="checkbox-wrapper">
                      <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>

                {}
                <div className="filter-section">
                  <h6 className="filter-title">Avaliação</h6>
                  {[
                    { stars: "⭐⭐⭐⭐⭐", label: "5 estrelas" },
                    { stars: "⭐⭐⭐⭐", label: "4+ estrelas" },
                    { stars: "⭐⭐⭐", label: "3+ estrelas" },
                  ].map((rating, idx) => (
                    <div key={idx} className="checkbox-wrapper">
                      <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                        {rating.stars} {rating.label}
                      </label>
                    </div>
                  ))}
                </div>

                <button onClick={clearFilters} className="clear-filters-btn">
                  🗑️ Limpar Filtros
                </button>
              </div>
            </div>
          </div>

          {}
          <div>
            {}
            <div className="products-header">
              <h5 className="products-title">
                <strong>Produtos</strong>
                <span className="products-subtitle">
                  (Conectar a API para mostrar os produtos)
                </span>
              </h5>
              <select className="sort-select">
                <option>Mais Relevantes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Mais Vendidos</option>
                <option>Melhor Avaliados</option>
              </select>
            </div>

            {}
            <div className="products-grid">
              {/* 
                Substitir o array [1,2,3...] por products.map() quando conectar API
                Exemplo: products.map((product) => ( ... use product.nome, product.preco, etc ... ))
              */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div key={item} className="product-card">
                  <div className="product-image-wrapper">
                    <div className="product-image-placeholder">
                      <div className="product-image-content">
                        <div className="product-image-icon">📦</div>
                        <p className="product-image-text">Imagem da API</p>
                      </div>
                    </div>
                    <span className="product-discount-badge">-15%</span>
                    <button className="product-favorite-btn">❤️</button>
                  </div>
                  <div className="product-body">
                    <p className="product-category">Categoria</p>
                    <h6 className="product-name">Nome do Produto {item}</h6>
                    <div className="product-rating">
                      <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                      <span className="rating-count">(123)</span>
                    </div>
                    <div className="product-old-price">
                      <del className="old-price-text">R$ 1.299,00</del>
                    </div>
                    <h5 className="product-price">R$ 1.099,00</h5>
                    <p className="product-installment">
                      ou 10x de R$ 109,90 sem juros
                    </p>
                    <button className="add-to-cart-btn">
                      🛒 Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {}
            <div className="pagination-container">
              <button className="pagination-btn pagination-btn-disabled">
                Anterior
              </button>
              <button className="pagination-btn pagination-btn-active">
                1
              </button>
              <button className="pagination-btn pagination-btn-inactive">
                2
              </button>
              <button className="pagination-btn pagination-btn-inactive">
                3
              </button>
              <button className="pagination-btn pagination-btn-inactive">
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>

      {}
    </div>
  );
};

export default Home;
