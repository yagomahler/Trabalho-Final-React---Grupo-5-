import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { CarrinhoProvider } from "./contexts/Contexto";

function App() {
  return (
    <div>
     <CarrinhoProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </CarrinhoProvider>
      
    </div>
  );
}

export default App;