import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as styles from "./Login.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const autenticar = async (e) => {
        e.preventDefault();
        setErro("");
        setSucesso("");

        try {
            // Substitua pela URL da sua API real
            const response = await axios.post("http://localhost:8080/login", {
                email,
                senha,
            });

            const token = response.data.token;
            localStorage.setItem("token", token);
            setSucesso("Login realizado com sucesso!");
        } catch (error) {
            console.error(error);
            setErro("Usuário ou senha incorretos!");
        }
    };

    return (
        <>
            <Header />

            <div className={`${styles.loginContainer} bg-light`}>
                <div className={`${styles.loginBox} shadow-lg`}>
                    <div className="text-center mb-4">
                        <i className="bi bi-laptop text-primary" style={{ fontSize: "3rem" }}></i>
                        <h3 className="mt-2 fw-bold">SerraTechStore</h3>
                        <p className="text-muted">Faça login para acessar os produtos</p>
                    </div>

                    <form onSubmit={autenticar}>
                        {erro && <div className="alert alert-danger text-center py-2">{erro}</div>}
                        {sucesso && <div className="alert alert-success text-center py-2">{sucesso}</div>}

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                <i className="bi bi-envelope-fill me-2 text-primary"></i>E-mail
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                <i className="bi bi-lock-fill me-2 text-primary"></i>Senha
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className={`${styles.loginButton} btn btn-primary w-100 mt-2`}>
                            <i className="bi bi-box-arrow-in-right me-2"></i>Entrar
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <small className="text-muted">
                            Ainda não tem conta?{" "}
                            <a href="#" className="text-primary">
                                Cadastre-se
                            </a>
                        </small>
                    </div>
                </div>
            </div>

            <Footer /> 
        </>
    );
};

export default Login;
