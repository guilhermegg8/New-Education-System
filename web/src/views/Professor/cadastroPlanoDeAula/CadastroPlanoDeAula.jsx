import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

import "./CadastroPlanoDeAula.css"
const CadastroPlanoDeAula = () => {
  return (
    <div className="global">
    <div className="bodyPlanoDeAula">
    
    
    <Header type="professor" />



     <div className='containerForms'>
        <form className='formPlanoDeAula'>
            <h1>Cadastro Plano de Aula</h1>
            <br />
            <label htmlFor="txtName">
            <input type="text" 
                name="txtName" 
                placeholder="Nome Da Disciplina" 
                className="input_text_plano"/>
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
           
            <label htmlFor="txtDesc">
            <input style={{marginTop: "10px"}} type="text" 
                name="txtDesc" 
                placeholder="Descrição" 
                className="input_text_plano"/>
                
            </label>
           
            <label htmlFor="txtDocPlano" className="label-file">Selecione um arquivo &#187;</label>
            <input type="file" 
                name="txtDocPlano" 
                id="txtDocPlano"/>
                <span id="file-name"></span>
        
            <hr />
            <button className="submit_plano_aula">Cadastrar</button>
        
        </form>
     </div>
    

    

    </div>
    </div>
  )
}

export default CadastroPlanoDeAula