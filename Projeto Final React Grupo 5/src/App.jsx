import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Main";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

{/*<Header />
      <Home />
      <Footer />*/}