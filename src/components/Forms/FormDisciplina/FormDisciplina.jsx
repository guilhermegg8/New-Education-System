import "../../FormManipulation.css"

export default function FormDisciplina() {
    return (
        <form action="#" className="form-manipulation" method="POST">
            <div className="form-inputs">
                <input type="text" className="input" name="nome" id="nome" placeholder="Nome" required />
                <input type="text" className="input" name="professor" id="professor" placeholder="Professor" required />
                <input type="text" className="input" name="ementa" id="ementa" placeholder="Ementa" required />
                <input type="text" className="input" name="carga" id="carga" placeholder="Carga horária" required />
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