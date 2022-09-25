
import './CadastroPlanoDeAula.css'


const CadastroPlanoDeAula = () => {
  return (
    <>
       
     <div className='containerForms'>
        <form>
            <h1>Cadastro Plano de Aula</h1>
            <br />
            <label htmlFor="txtName">
            <input type="text" 
                name="txtName" 
                placeholder="Nome Da Disciplina" 
                />
            </label>

            <label htmlFor="txtCurso">
                <select id="curso" required className="select_cursos">
                    <option name="txtCurso" value="" disabled hidden>Curso</option>
                    <option name="txtCurso" value="optDSM">DSM</option>
                    <option name="txtCurso" value="optADS">ADS</option>

                </select>
            </label>

            <label htmlFor="txtAula">
                <select id="aulas" required className="select_aulas">
                    <option name="txtCurso" value="" disabled hidden>Numero da Aula</option>
                    <option name="txtAula" value="optAula">Aula 1</option>
                    <option name="txtAula" value="optAula2">Aula 2</option>
                </select>
            </label>
            <br />
            <label htmlFor="txtDesc">
            <input type="text" 
                name="txtDesc" 
                placeholder="Descrição" 
                />
                
            </label>
            <br /><br />
            <label htmlFor="txtDocPlano" className="label-file">Selecione um arquivo &#187;</label>
            <input type="file" 
                name="txtDocPlano" 
                id="txtDocPlano" />
                <span id="file-name"></span>
          <br />
          <br />
            <hr />
            <input type="submit" value="Cadastrar"/>
        </form>
     </div>
    

    

    </>
  )
}

export default CadastroPlanoDeAula