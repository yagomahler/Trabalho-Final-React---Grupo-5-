import React from 'react';
import styles from './ConfirmaCompra.module.css';

const ModalConfirmacao = ({ isOpen, onClose, precoTotal }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={styles.modalContent} 
        onClick={e => e.stopPropagation()} 
      >
        <span className={styles.fechar} onClick={onClose}>&times;</span>
        <h2>Finalizar Compra</h2>
        <p>Confirme os detalhes do seu pedido:</p>
        
        <div className={styles.detalhes}>
            <p>Total a pagar: <strong>R$ {precoTotal.toFixed(2).replace(".", ",")}</strong></p>
            <div className={styles.qrCodePlaceholder}>
                <img src="../src/assets/QRcode-cobrar.jpeg" alt="QR Code Pagamento" width="350px"/>
                <p>chave pix: +5524998777542</p>
            </div>
        </div>

        <div className={styles.botoesContainer}>
          <button onClick={onClose} className={styles.btnCancelar}>
            Cancelar
          </button>
          <button onClick={() => alert("Confirmaremos o pagamento e entraremos em contato <3")} className={styles.btnConfirmar}>
            Confirmar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacao;
