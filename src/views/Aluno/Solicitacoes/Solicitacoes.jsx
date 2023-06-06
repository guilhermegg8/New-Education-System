import Header from "../../../components/Header/Header"

import '../Main.css'

import { BsChevronRight } from "react-icons/bs"

export default function Solicitacoes() {
    return (
        <div className="global">
            <Header type="aluno" />
            <main className="aluno">
                <div className="content content-2">
                    <h1 class="content-title">
                        Solicitações de documentos
                    </h1>
                    <div class="calendar calendar-2">
                        <div class="calendar-info">
                            <div class="info-course">
                                <p><b>Documento:</b></p>
                                <p>Atestado de Frequência</p>
                            </div>
                            <div class="info-test">
                                <p>Protocolo <br /> // </p>
                                <p>Portaria <br /> 0</p>
                                <p>Aviso <br /> 00:00 </p>
                                <p>Quantidade <br /> 0 </p>
                                <p>Processamento <br /> //</p>
                                <p> Status</p>

                            </div>
                            <a href="#" class="submit-link" title="Solicitar Documento">
                                Solicitar
                                <BsChevronRight className="submit-link-icon" />
                            </a>
                        </div>

                        <div class="calendar-info">
                            <div class="info-course">
                                <p><b>Documento:</b></p>
                                <p>Histórico do Aluno</p>
                            </div>
                            <div class="info-test">
                                <p>Protocolo <br /> // </p>
                                <p>Portaria <br /> 0</p>
                                <p>Aviso <br /> 00:00 </p>
                                <p>Quantidade <br /> 0 </p>
                                <p>Processamento <br /> //</p>
                                <p> Status</p>
                            </div>
                            <a href="#" class="submit-link" title="Solicitar Documento">
                                Solicitar
                                <BsChevronRight className="submit-link-icon" />
                            </a>
                        </div>

                        <div class="calendar-info">
                            <div class="info-course">
                                <p><b>Documento:</b> </p>
                                <p>Atestado Geral</p>
                            </div>
                            <div class="info-test">
                                <p>Protocolo <br /> // </p>
                                <p>Portaria<br /> 0</p>
                                <p>Aviso <br /> 00:00 </p>
                                <p>Quantidade <br /> 0 </p>
                                <p>Processamento <br /> //</p>
                                <p> Status</p>
                            </div>
                            <a href="#" class="submit-link" title="Solicitar Documento">
                                Solicitar
                                <BsChevronRight className="submit-link-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}