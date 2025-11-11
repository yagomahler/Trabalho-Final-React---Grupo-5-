import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Perfil.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useUser } from "../../contexts/userContext";

const Perfil = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [editando, setEditando] = useState(false);
    const [form, setForm] = useState({});
    const API_URL = "https://691386fef34a2ff1170c47e2.mockapi.io/clientes";
    const{logout} = useUser();

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem("usuario"));
        if (!dados) {
            navigate("/");
        } else {
            setUsuario(dados);
            setForm(dados);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        logout();
        navigate("/");
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const salvarAlteracoes = async () => {
        try {
            const response = await axios.put(`${API_URL}/${usuario.id}`, form);
            localStorage.setItem("usuario", JSON.stringify(response.data));
            setUsuario(response.data);
            setEditando(false);
        } catch (error) {
            console.error("Erro ao atualizar:", error);
            alert("Erro ao salvar alterações!");
        }
    };

    const handleDelete = async () => {
        const confirmacao = window.confirm("Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita!");
        if (!confirmacao) return;

        try {
            await axios.delete(`${API_URL}/${usuario.id}`);
            localStorage.removeItem("usuario");
            alert("Conta excluída com sucesso!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao excluir conta:", error);
            alert("Erro ao excluir a conta!");
        }
    };

    if (!usuario) return null;

    return (
        <>
            <Header />
            <div className={`container py-5 ${styles.perfilContainer}`}>
                <div className="card shadow p-4">
                    <div className="text-center mb-4">
                        <i className="bi bi-person-circle text-primary" style={{ fontSize: "5rem" }}></i>
                        <h3 className="fw-bold mt-2">{usuario.nome}</h3>
                        <p className="text-muted">{usuario.email}</p>
                    </div>

                    {!editando ? (
                        <>
                            <ul className="list-group mb-4">
                                <li className="list-group-item"><b>CPF:</b> {usuario.cpf}</li>
                                <li className="list-group-item"><b>Telefone:</b> {usuario.telefone}</li>
                                <li className="list-group-item"><b>CEP:</b> {usuario.cep}</li>
                            </ul>
                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                <button className="btn btn-outline-primary flex-grow-1" onClick={() => setEditando(true)}>
                                    <i className="bi bi-pencil-square me-2"></i>Editar Perfil
                                </button>
                                <button className="btn btn-outline-danger flex-grow-1" onClick={handleLogout}>
                                    <i className="bi bi-box-arrow-right me-2"></i>Sair
                                </button>
                                <button className="btn btn-danger flex-grow-1" onClick={handleDelete}>
                                    <i className="bi bi-trash3 me-2"></i>Excluir Conta
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input name="nome" value={form.nome} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefone</label>
                                <input name="telefone" value={form.telefone} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">CEP</label>
                                <input name="cep" value={form.cep} onChange={handleChange} className="form-control" />
                            </div>

                            <div className="d-flex justify-content-between">
                                <button className="btn btn-success" onClick={salvarAlteracoes}>
                                    <i className="bi bi-check-circle me-2"></i>Salvar
                                </button>
                                <button className="btn btn-secondary" onClick={() => setEditando(false)}>
                                    Cancelar
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Perfil;