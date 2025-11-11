import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("usuarioLogado");
    if (savedUser) {
      setUsuarioLogado(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    setUsuarioLogado(userData);
    localStorage.setItem("usuarioLogado", JSON.stringify(userData));
  };

  const logout = () => {
    setUsuarioLogado(null);
    localStorage.removeItem("usuarioLogado");
  };

  return (
    <UserContext.Provider value={{ usuarioLogado, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
