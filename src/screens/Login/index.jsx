import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");

    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const API_URL = "https://691386fef34a2ff1170c47e2.mockapi.io/clientes";

    const autenticar = async (e) => {
        e.preventDefault();
        setErro("");
        setSucesso("");

        try {
            const response = await axios.get(API_URL);
            const clientes = response.data;

            const cliente = clientes.find(
                (c) => c.email === emailLogin && c.senha === senhaLogin
            );

            if (cliente) {
                localStorage.setItem("usuario", JSON.stringify(cliente));
                setSucesso("Login realizado com sucesso!");
                setTimeout(() => {
                    window.location.href = "/perfil";
                }, 1000);
            } else {
                setErro("E-mail ou senha inválidos!");
            }
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            setErro("Erro ao tentar autenticar!");
        }
    };

    const cadastrar = async (e) => {
        e.preventDefault();
        setErro("");
        setSucesso("");

        try {
            await axios.post(API_URL, {
                nome,
                email,
                senha,
                cep,
                cpf,
                telefone,
            });

            setSucesso("Cadastro realizado com sucesso!");
            setNome("");
            setEmail("");
            setSenha("");
            setCep("");
            setCpf("");
            setTelefone("");
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            setErro("Erro ao realizar cadastro!");
        }
    };

    return (
        <>
            <Header />
            <div className="container py-5">
                <div className="row justify-content-center">
                    {/* LOGIN */}
                    <div className="col-md-5 bg-white shadow p-4 rounded me-md-3 mb-4 mb-md-0">
                        <div className="text-center mb-4">
                            <i className="bi bi-person-circle text-primary" style={{ fontSize: "3rem" }}></i>
                            <h4 className="mt-2 fw-bold">Entrar</h4>
                        </div>

                        <form onSubmit={autenticar}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Digite seu e-mail"
                                    value={emailLogin}
                                    onChange={(e) => setEmailLogin(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                    value={senhaLogin}
                                    onChange={(e) => setSenhaLogin(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                <i className="bi bi-box-arrow-in-right me-2"></i>Entrar
                            </button>
                        </form>
                    </div>

                    {/* CADASTRO */}
                    <div className="col-md-5 bg-white shadow p-4 rounded">
                        <div className="text-center mb-4">
                            <i className="bi bi-person-plus-fill text-success" style={{ fontSize: "3rem" }}></i>
                            <h4 className="mt-2 fw-bold">Criar Conta</h4>
                        </div>

                        <form onSubmit={cadastrar}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">CEP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">CPF</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Telefone</label>
                                <input
                                    type="text"
                                    className="form-control"
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

                {/* Mensagens */}
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-10">
                        {erro && <div className="alert alert-danger text-center">{erro}</div>}
                        {sucesso && <div className="alert alert-success text-center">{sucesso}</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
