import "../../FormManipulation.css"

export default function FormUpdateFuncionario() {
    return (
        <form action="#" className="form-manipulation" method="POST">
            <div className="form-inputs">
                <input type="text" className="input" name="nome" id="nome" placeholder="Nome" required />
                <input type="number" className="input" name="remuneracao" id="remuneracao" placeholder="Remuneração" required />
                <input type="text" className="input" name="cargo" id="cargo" placeholder="Cargo" required />
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
                <button type="submit" className="input button red">Excluir Funcionário</button>
                <button type="submit" className="input button">Atualizar</button>
            </div>
        </form>
    )
}