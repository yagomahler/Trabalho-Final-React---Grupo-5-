import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { CarrinhoProvider } from "./contexts/Contexto";
import { DarkModeProvider } from "./contexts/darkMode";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <div>
     <CarrinhoProvider>
      <DarkModeProvider>
        <UserProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      </UserProvider>
      </DarkModeProvider>
    </CarrinhoProvider>
      
    </div>
  );
}

export default App;