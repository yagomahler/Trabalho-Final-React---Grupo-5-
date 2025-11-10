import { useContext } from "react";
import { Container} from "react-bootstrap";
import { DarkModeContext } from "../../contexts/darkMode";
import "./Acessibilidade.module.css";
import styles from "./Acessibilidade.module.css";

export function Acessibilidade() {
  const {darkThemeIsActive, handleTheme} = useContext(DarkModeContext);
  
  return (
    <Container fluid id="secao-acessibilidade">
          <div id="container-botoes">
            <button
              className={styles.btnAceC}               
              onClick={handleTheme}
            >
              Mudar Tema: {darkThemeIsActive ? 'Escuro' : 'Claro'}
            </button>
          </div>
    </Container>
  );
}
