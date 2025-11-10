import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { CarrinhoProvider } from "./contexts/Contexto";
import { DarkModeProvider } from "./contexts/darkMode";

function App() {
  return (
    <div>
     <CarrinhoProvider>
      <DarkModeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      </DarkModeProvider>
    </CarrinhoProvider>
      
    </div>
  );
}

export default App;