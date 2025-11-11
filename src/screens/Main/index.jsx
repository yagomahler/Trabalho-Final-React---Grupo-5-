import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { usaCarrinho } from "../../contexts/Contexto";
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [produtos, setProdutos] = useState([]);
  const [sortOption, setSortOption] = useState("relevantes"); // 🆕 estado da ordenação
  const { addCarrinho } = usaCarrinho();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/produtos")
      .then((response) => {
        setProdutos(response.data);
        navigate("/");
      })
      .catch(() => console.error("Erro na requisição"));
  }, []);

  const produtosFiltrados = produtos.filter((produto) => {
    const dentroFaixa =
      produto.preco >= priceRange.min && produto.preco <= priceRange.max;

    if (selectedCategory === "all") return dentroFaixa;

    return (
      dentroFaixa &&
      produto.categoria.nome.toLowerCase() === selectedCategory.toLowerCase()
    );
  });

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    switch (sortOption) {
      case "menorPreco":
        return a.preco - b.preco;
      case "maiorPreco":
        return b.preco - a.preco;
      case "maisVendidos":
        return b.quantidadeEstoque - a.quantidadeEstoque;
      case "melhorAvaliados":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const categories = [
    { id: "all", name: "Todos os Produtos", icon: "📦" },
    { id: "computadores", name: "Computadores", icon: "🖥️" },
    { id: "notebooks", name: "Notebooks", icon: "💻" },
    { id: "periféricos", name: "Periféricos", icon: "⌨️" },
    { id: "smartphones", name: "Smartphones", icon: "📱" },
    { id: "tvs", name: "TVs", icon: "📺" },
    { id: "áudio", name: "Áudio", icon: "🎧" },
    { id: "games", name: "Games", icon: "🎮" },
  ];

  const clearFilters = () => {
    setPriceRange({ min: 0, max: 10000 });
    setSelectedCategory("all");
    setSortOption("relevantes");
  };

  return (
    <div>
      <Header />
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
            <div>
              <div className="filters-card">
                <h5 className="filters-header">🔧 Filtros</h5>
                <div className="filters-body">
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

                  <button onClick={clearFilters} className="clear-filters-btn">
                    🗑️ Limpar Filtros
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="products-header">
                <h5 className="products-title">
                  <strong>Produtos</strong>{" "}
                  <span className="products-subtitle">
                    ({produtosOrdenados.length} encontrados)
                  </span>
                </h5>
                <select
                  className="sort-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="relevantes">🔥 Mais Relevantes</option>
                  <option value="menorPreco">⬇️ Menor Preço</option>
                  <option value="maiorPreco">⬆️ Maior Preço</option>
                  <option value="maisVendidos">💰 Mais Vendidos</option>
                  <option value="melhorAvaliados">⭐ Melhor Avaliados</option>
                </select>
              </div>

              <div className="products-grid">
                {produtosOrdenados.map((produto) => (
                  <div key={produto.id} className="product-card">
                    <div className="product-image-wrapper">
                      <img
                        src={produto.urlImagem}
                        alt={produto.nome}
                        className="product-image-icon"
                        width="100%"
                        height="100%"
                      />
                      <span className="product-discount-badge">-15%</span>
                      <button className="product-favorite-btn">❤️</button>
                    </div>
                    <div className="product-body">
                      <p className="product-category">
                        Categoria: {produto.categoria.nome}
                      </p>
                      <h6 className="product-name">{produto.nome}</h6>
                      <h5 className="product-price">
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                      </h5>
                      <p className="product-installment">
                        ou 10x de R${" "}
                        {(produto.preco / 10).toFixed(2).replace(".", ",")} sem
                        juros
                      </p>
                      <p>{produto.descricao}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() =>
                          addCarrinho({
                            id: produto.id,
                            title: produto.nome,
                            category: produto.categoria.nome,
                            price: produto.preco,
                            image: produto.urlImagem,
                          })
                        }
                      >
                        🛒 Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
