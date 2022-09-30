import "../../FormManipulation.css"

export default function FormUpdateSolicitacao() {
    return (
        <form action="#" className="form-manipulation" method="POST">
            <div className="form-inputs">
                <input type="text" className="input" name="nome" id="nome" placeholder="Nome" required />
                <input type="text" className="input" name="tipo" id="tipo" placeholder="Tipo de documento" required />
                <input type="text" className="input" name="curso" id="curso" placeholder="Curso" required />
                <select name="status" id="status" className="input" required>
                    <option value="" disabled hidden selected>Status</option>
                    <option value="recusado">Recusado</option>
                    <option value="pendente">Pendente</option>
                    <option value="concluido">Concluído</option>
                </select>
                <input type="text" className="input" id="registro" name="registro" placeholder="Registro" required />
                <input type="text" className="input" id="anexos" name="anexos" placeholder="Anexos" required />
                <button type="submit" className="input button red">Excluir Solicitação</button>
                <button type="submit" className="input button">Atualizar</button>
            </div>
        </form>
    )
}