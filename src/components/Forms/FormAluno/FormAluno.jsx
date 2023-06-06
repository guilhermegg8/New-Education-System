import "../../FormManipulation.css"

export default function FormAluno() {
    return (
        <form action="#" className="form-manipulation" method="POST">
            <div className="form-inputs">
                <input type="text" className="input" name="nome" id="nome" placeholder="Nome" required />
                <select name="semestre" id="semestre" className="input" required>
                    <option value="" disabled hidden selected>Semestre</option>
                    <option value="1">1°</option>
                    <option value="2">2°</option>
                    <option value="3">3°</option>
                    <option value="4">4°</option>
                    <option value="5">5°</option>
                    <option value="6">6°</option>
                </select>
                <select name="curso" id="curso" className="input" required>
                    <option value="" disabled hidden selected>Curso</option>
                    <option value="dsm">Desenvolvimento de Software Multiplataforma</option>
                    <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                    <option value="comex">Comércio Exterior</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="log">Logística</option>
                    <option value="dpp">Desenvolvimento de Produtos Plásticos</option>
                </select>
                <select name="periodo" id="periodo" className="input" required>
                    <option value="" disabled hidden selected>Período</option>
                    <option value="Manha">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                    <option value="Integral">Integral</option>
                </select>
                <input type="text" className="input" id="register" name="register" placeholder="Registro" required />
                <select name="unidade" id="unidade" className="input" required>
                    <option value="" disabled hidden selected>Unidade</option>
                    <option value="FatecZL">Fatec Zona Leste</option>
                    <option value="EtecZL">Etec Zona Leste</option>
                    <option value="FatecVictorCivita">Fatec Victor Civita</option>
                    <option value="EtecMartinLutherKing">Etec Martin Luther King</option>
                    <option value="FatecSaoPaulo">Fatec São Paulo</option>
                    <option value="FatecMogiDasCruzes">Fatec Mogi das Cruzes</option>
                </select>
                <div></div>
                <button type="submit" className="input button">Cadastrar</button>
            </div>
        </form>
    )
}