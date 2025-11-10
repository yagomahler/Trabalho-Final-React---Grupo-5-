
import { createContext, useState, useContext } from 'react'

const CarrinhoContexto = createContext({});

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);

    const addCarrinho = (produto) => {
        const existente = carrinho.find((item) => item.id === produto.id);
        if (existente) {
            setCarrinho(
                carrinho.map((item) =>
                    item.id === produto.id ? { ...item, quantity: item.quantity + 1 } : item)

            );
        } else {
            setCarrinho([...carrinho, { ...produto, quantity: 1 }]);
        }
    };


    const removeDoCarrinho = (id) => {
        setCarrinho(carrinho.filter((item) => item.id !== id));
    };

    const limpaCarrinho = () => setCarrinho([]);

    const precoTotal = carrinho.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CarrinhoContexto.Provider value={{ carrinho, addCarrinho, removeDoCarrinho, limpaCarrinho, precoTotal }}>
        {children}
        </CarrinhoContexto.Provider>
        
    );
};

export const usaCarrinho = () => useContext(CarrinhoContexto);

