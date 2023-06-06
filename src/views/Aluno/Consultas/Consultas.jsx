import Header from "../../../components/Header/Header"
import User from "../../../assets/Perfil.webp"

import '../Main.css'

export default function Consultas() {
    return (
        <div className="global">
            <Header type="aluno" />
            <main className="aluno">
                <div class="content">
                    <div class="profile">
                        <div class="modal" id="modal">
                            <h2 class="modal-title">Notificações</h2>
                            <div class="modal-content">
                                <div>
                                    <i class="bi bi-bookmark-check-fill modal-content-icon"></i>
                                    <span class="modal-content-text">Notas de <b>IES011</b> lançadas</span>
                                </div>
                                <div>
                                    <i class="bi bi-bookmark-check-fill modal-content-icon"></i>
                                    <span class="modal-content-text">Notas de <b>IBD014</b> lançadas</span>
                                </div>
                            </div>
                            <div class="modal-button">
                                <a href="#" id="close-modal">OK!</a>
                            </div>
                        </div>
                        <div class="profile-options">
                            <img class="profile-img" src={User} alt="Foto de perfil do aluno"
                                title="Foto de perfil do aluno" />
                            <div class="profile-buttons">
                                <a href="#" class="nav-link" title="Configurações">
                                    <i class="bi bi-gear link-icon"></i>
                                </a>
                                <a href="#" class="nav-link" title="Configurações">
                                    <i class="bi bi-bell link-icon" id="open-modal"></i>
                                </a>
                            </div>
                        </div>
                        <div class="profile-info">
                            <h2>Gustavo Nascimento Souza</h2>
                            <div class="info-course">
                                <h3 class="info-course-title">FATEC Zona Leste</h3>
                                <div>
                                    <p>Desenvolvimento de Software Multiplataforma - Manhã</p>
                                    <p><b>RA:</b> 1111234567890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="options">
                        <div class="options-container">
                            <span class="options-title">
                                Notas Parciais
                                <i class="bi bi-card-list options-icon"></i>
                            </span>
                            <a href="#" class="options-link">Visualizar</a>
                        </div>

                        <div class="options-container">
                            <span class="options-title">
                                Frequência
                                <i class="bi bi-activity options-icon"></i>
                            </span>
                            <a href="#" class="options-link" title="Mudar Tema">Visualizar</a>
                        </div>

                        <div class="options-container">
                            <span class="options-title">
                                Histórico
                                <i class="bi bi-card-checklist options-icon"></i>
                            </span>
                            <a href="#" class="options-link">Visualizar</a>
                        </div>
                    </div>
                </div>
                <div class="important-announcement">
                    <span>
                        <i><b>Prezado aluno</b></i>,
                    </span>
                    <span>
                        Já se encontra disponível para preenchimento o <b>Formulário Saúde</b>.
                    </span>
                    <span>
                        Solicitamos o preenchimento e entrega para a secretaria.
                    </span>
                    <span>
                        A entrega pode ser <b>presencialmente</b> OU via email <b>f111acad@cps.sp.gov.br</b>.
                    </span>
                    <span>Atenciosamente,</span>
                    <span><i><b>Secretaria</b></i></span>
                </div>
            </main>
        </div>
    )
}