import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as styles from "./Login.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUser } from "../../contexts/userContext";

const Login = () => {
    const [emailLogin, setEmailLogin] = useState("");

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");

    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const { login } = useUser();

    const autenticar = async (e) => {
        e.preventDefault();
        setErro("");
        setSucesso("");

        try {
            const response = await axios.get("http://localhost:8080/clientes", {
            });

            const clientes = response.data;
            const clienteExiste = clientes.some((c) => c.email === emailLogin);

            if (clienteExiste) {
                login(clienteExiste)
                setSucesso("Login realizado com sucesso!");
            } else {
                setErro("E-mail não encontrado no sistema!");
            }
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            setErro("Erro ao tentar autenticar!");
        }
    };

    // Cadastro de novo cliente
    const cadastrar = async (e) => {
        e.preventDefault();
        setErro("");
        setSucesso("");

        try {
            await axios.post(
                "http://localhost:8080/clientes",
                {
                    nome,
                    email,
                    cep,
                    cpf,
                    telefone,
                },
                {

                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setSucesso("Cadastro realizado com sucesso!");
            setNome("");
            setEmail("");
            setCep("");
            setCpf("");
            setTelefone("");
        } catch (error) {
            console.error("Erro ao cadastrar:");
            setErro(`Erro ao realizar cadastro! (${error.response?.status || "Sem status"})`);
        }
    };

    return (
        <>
            <Header />

            <div className={styles.loginContainer}>
                <div className="container py-5">
                    <div className="row justify-content-center">

                        {/* COLUNA LOGIN */}
                        <div className="col-md-5 bg-white shadow p-4 rounded me-md-3 mb-4 mb-md-0">
                            <div className="text-center mb-4">
                                <i className="bi bi-person-circle text-primary" style={{ fontSize: "3rem" }}></i>
                                <h4 className="mt-2 fw-bold">Entrar na conta</h4>
                            </div>

                            <form onSubmit={autenticar}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        <i className="bi bi-envelope-fill me-2 text-primary"></i>E-mail
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Digite seu e-mail"
                                        value={emailLogin}
                                        onChange={(e) => setEmailLogin(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    <i className="bi bi-box-arrow-in-right me-2"></i>Entrar
                                </button>
                            </form>
                        </div>

                        {/* COLUNA CADASTRO */}
                        <div className="col-md-5 bg-white shadow p-4 rounded">
                            <div className="text-center mb-4">
                                <i className="bi bi-person-plus-fill text-success" style={{ fontSize: "3rem" }}></i>
                                <h4 className="mt-2 fw-bold">Criar nova conta</h4>
                            </div>

                            <form onSubmit={cadastrar}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        <i className="bi bi-person-fill me-2 text-success"></i>Nome
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu nome completo"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        <i className="bi bi-envelope-fill me-2 text-success"></i>E-mail
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
                                        <i className="bi bi-geo-alt-fill me-2 text-success"></i>CEP
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu CEP"
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        <i className="bi bi-card-text me-2 text-success"></i>CPF
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu CPF"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        <i className="bi bi-telephone-fill me-2 text-success"></i>Telefone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite seu telefone"
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-success w-100">
                                    <i className="bi bi-check-circle me-2"></i>Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Mensagens gerais */}
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-10">
                            {erro && <div className="alert alert-danger text-center">{erro}</div>}
                            {sucesso && <div className="alert alert-success text-center">{sucesso}</div>}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Login;
