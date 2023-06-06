import Header from "../../../components/Header/Header";

export default function Agenda() {
    return (
        <div className="global">
            <Header type="aluno" />
            <main className="aluno">
                <div className="content content-2">
                    <h1 className="content-title">
                        <i className="bi bi-calendar-plus link-icon"></i>
                        Calendário de Avaliações
                    </h1>
                    <div className="calendar">
                        <div className="calendar-info">
                            <div className="info-course">
                                <p><b>Sigla:</b> IES011</p>
                                <p>Engenharia de Software</p>
                            </div>
                            <div className="divisor"></div>
                            <div className="info-test">
                                <p><b>P1</b> - 29/03/22</p>
                                <p><b>P2</b> - 14/06/22</p>
                                <p><b>P3</b> - 28/06/22</p>
                            </div>
                        </div>

                        <div className="calendar-info">
                            <div className="info-course">
                                <p><b>Sigla:</b> IBD014</p>
                                <p>Modelagem de Banco de Dados</p>
                            </div>
                            <div className="divisor"></div>
                            <div className="info-test">
                                <p><b>P1</b> - 29/03/22</p>
                                <p><b>P2</b> - 14/06/22</p>
                                <p><b>P3</b> - 28/06/22</p>
                            </div>
                        </div>

                        <div className="calendar-info">
                            <div className="info-course">
                                <p><b>Sigla:</b> IAL010</p>
                                <p>Algoritmo e Lógica de Programação</p>
                            </div>
                            <div className="divisor"></div>
                            <div className="info-test">
                                <p><b>P1</b> - 29/03/22</p>
                                <p><b>P2</b> - 14/06/22</p>
                                <p><b>P3</b> - 28/06/22</p>
                            </div>
                        </div>

                        <div className="calendar-info">
                            <div className="info-course">
                                <p><b>Sigla:</b> ISO011</p>
                                <p>S.O e Redes de Computadores</p>
                            </div>
                            <div className="divisor"></div>
                            <div className="info-test">
                                <p><b>P1</b> - 29/03/22</p>
                                <p><b>P2</b> - 14/06/22</p>
                                <p><b>P3</b> - 28/06/22</p>
                            </div>
                        </div>

                        <div className="calendar-info">
                            <div className="info-course">
                                <p><b>Sigla:</b> ISW028</p>
                                <p>Desenvolvimento Web I</p>
                            </div>
                            <div className="divisor"></div>
                            <div className="info-test">
                                <p><b>P1</b> - 29/03/22</p>
                                <p><b>P2</b> - 14/06/22</p>
                                <p><b>P3</b> - 28/06/22</p>
                            </div>
                        </div>

                        <div className="calendar-info">
                            <div className="info-course">
                                <p><b>Sigla:</b> ISW031</p>
                                <p>Design Digital</p>
                            </div>
                            <div className="divisor"></div>
                            <div className="info-test">
                                <p><b>P1</b> - 29/03/22</p>
                                <p><b>P2</b> - 14/06/22</p>
                                <p><b>P3</b> - 28/06/22</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}