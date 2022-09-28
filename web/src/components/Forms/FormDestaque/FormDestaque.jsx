import "../../FormManipulation.css"

export default function FormDestaque() {
    return (
        <form action="#" className="form-manipulation" method="POST">
            <div className="form-inputs">
                <input type="text" className="input" name="nome" id="nome" placeholder="Nome" required />
                <input type="date" className="input date" name="data" id="data" placeholder="Data" required />
                <select name="curso" id="curso" className="input select" required>
                    <option value="" disabled hidden selected>Curso</option>
                    <option value="dsm">Desenvolvimento de Software Multiplataforma</option>
                    <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                    <option value="comex">Comércio Exterior</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="log">Logística</option>
                    <option value="dpp">Desenvolvimento de Produtos Plásticos</option>
                </select>
                <select name="tipo" id="tipo" className="input" required>
                    <option value="" disabled hidden selected>Tipo de destaque</option>
                    <option value="notificacao">Notificação</option>
                    <option value="curso">Curso extracurricular</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="passeio">Passeio</option>
                </select>
                <input type="text" className="input" id="responsavel" name="responsavel" placeholder="Responsável" required />
                <input type="text" className="input" id="descricao" name="descricao" placeholder="Descrição" required />
                <div></div>
                <button type="submit" className="input button">Cadastrar</button>
            </div>
        </form>
    )
}