import React, { useState } from "react";
import { usaCarrinho } from "../../contexts/Contexto";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalConfirmacao from "../../components/ConfirmaCompra";
import styles from "./Compras.module.css";

const Compras = () => {
  const {
    carrinho,
    removeDoCarrinho,
    limpaCarrinho,
    precoTotal,
  } = usaCarrinho();

  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleFinalizarCompra = () => {
    if (carrinho.length > 0) {
      setIsModalOpen(true);
    } else {
      alert("Seu carrinho está vazio!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />

      <div className={styles.comprasContainer}>
        <div className={styles.produtosContainer}>
          <h2 className={styles.titulo}>🛒 Carrinho de Compras</h2>

          {carrinho.length === 0 ? (
            <p className={styles.carrinhoVazio}>Seu carrinho está vazio 😢</p>
          ) : (
            carrinho.map((item) => (
              <div key={item.id} className={styles.cardProduto}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.imagemProduto}
                />
                <div className={styles.infoProduto}>
                  <h3 className={styles.nomeProduto}>{item.title}</h3>
                  <p className={styles.categoriaProduto}>{item.category}</p>
                  <p className={styles.precoProduto}>
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </p>
                  <p className={styles.quantidade}>
                    Quantidade: {item.quantity}
                  </p>

                  <div className={styles.botoes}>
                    <button
                      onClick={() => removeDoCarrinho(item.id)}
                      className={styles.botaoRemover}
                    >
                      ❌ Remover
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {carrinho.length > 0 && (
            <button onClick={limpaCarrinho} className={styles.botaoLimpar}>
              🗑️ Limpar Carrinho
            </button>
          )}
        </div>

        <div className={styles.resumoContainer}>
          <h3 className={styles.resumoTitulo}>🧾 Resumo da Compra</h3>
          <p className={styles.resumoTexto}>
            Itens no carrinho: <strong>{carrinho.length}</strong>
          </p>
          <p className={styles.resumoTotal}>
            Total:{" "}
            <strong>
              R$ {precoTotal.toFixed(2).replace(".", ",")}
            </strong>
          </p>
          <button className={styles.botaoComprar} onClick={handleFinalizarCompra}>
            💳 Finalizar Compra
          </button>
        </div>
      </div>

      <Footer />

      <ModalConfirmacao 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        precoTotal={precoTotal} 
      />

    </div>
  );
};

export default Compras;