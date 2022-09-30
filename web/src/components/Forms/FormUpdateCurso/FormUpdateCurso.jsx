import "../../FormManipulation.css"

export default function FormUpdateCurso() {
    return (
        <form action="#" className="form-manipulation" method="POST">
            <div className="form-inputs">
                <input type="text" className="input" name="nome" id="nome" placeholder="Nome" required />
                <input type="text" className="input" name="coordenador" id="coordenador" placeholder="Coordenador" required />
                <input type="text" className="input" name="matriz" id="matriz" placeholder="Matriz Tecnológica" required />
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
                <button type="submit" className="input button red">Deletar Curso</button>
                <button type="submit" className="input button">Atualizar</button>
            </div>
        </form>
    )
}