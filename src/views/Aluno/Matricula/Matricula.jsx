import Header from "../../../components/Header/Header"
import User from "../../../assets/Perfil.webp"
import '../Main.css'

import "../../../styles/global.css"

export default function Matricula() {
    return (
        <div className="global">
            <Header type="aluno" />
            <main className="aluno">
                <div className="content matricula">
                    <div className="content-info">
                        <h1 className="content-title">
                            Matrícula do Aluno
                        </h1>
                        <div className="content-user">
                            <img src={User} alt="Foto de Perfil do Aluno" className="user-img" />
                            <div className="info-user">
                                <p className="info-user-text"><b>RA:</b> 1111234567890</p>
                                <p className="info-user-text"><b>Nome:</b> Gustavo Nascimento Souza</p>
                            </div>
                            <div className="info-user">
                                <p className="info-user-text"><b>Habilitação:</b> Tecnólogo em Desenvolvimento de Software
                                    Multiplataforma</p>
                                <p className="info-user-text"><b>Situação:</b> Em curso</p>
                            </div>
                            <div className="info-user">
                                <p className="info-user-text"><b>Período:</b> Manhã</p>
                                <p className="info-user-text"><b>Semestre Ingresso:</b> 1º Semestre - 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-office">
                        <div className="office-title">
                            <h2 className="office-title-text">Office 365</h2>
                        </div>
                        <div className="office-text">
                            <span>
                                <b>Email Institucional:</b>
                                <a href="#" className="office-link">gustavo.souza113@fatec.sp.gov.br</a>
                            </span>
                            <span>
                                <b>Termos de uso:</b>
                                <a href="#" className="office-link">Clique aqui</a>
                            </span>
                        </div>
                        <div className="office-footer">
                            <p className="office-title-text">Outros benefícios:</p>
                            <a href="#" className="office-link">Clique aqui</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}