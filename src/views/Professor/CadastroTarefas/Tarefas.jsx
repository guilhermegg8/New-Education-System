import Header from '../../../components/Header/Header'
import "./Tarefas.css"
import "../../../styles/global.css"
const Tarefas = () => {
  return (
    <div className='global'>
    
       <Header type="professor" className="headerTarefas"/>

  
       <div className="container-tarefas">
        <div className='container-tarefas-flexivel'>
        <div className="form">
      <ul className="formularios">
        <li className="tab active"><a href="#tarefa">Adicionar Tarefa</a></li>
        <li className="tab"><a href="#documento">Anexar Documento</a></li>
      </ul>
      <div className="tab-content">
        <div id="tarefa">   
          <h2 className="sub-title"> Adicionar Tarefa para a Turma</h2>
          <form>
          <div className="top-row">
            <div className="campos">
              
              <input type="text" required autocomplete="off" className="form-input" placeholder='Título'/>
            </div>
        
            <div className="campos">
              <input type="text"required autocomplete="off" className="form-input" placeholder='Pontuação'/>
            </div>
          </div>

          <div className="campos">
       <input type="text"required autocomplete="off" className="form-input" placeholder='Descrição'/>
          </div>
            
          <div className="campos">
            <label id="entrega" className="campos-label">
              Data de Entrega <span className="req">*</span>
            </label>
            <input type="datetime-local" className="form-input"/>
          </div>
                  
      <div className="campos">
        <input type="file" className="form-input" />
          </div> 
            
          <button type="submit" className="button button-block">Enviar</button>
          </form>
        </div>

     
        <div id="documento">   
          <h2 className="sub-title"> Anexar Documentos</h2>
          <form>
            <div className="campos">
            <label className="campos-label">
              Titulo<span className="req">*</span>
            </label>
            <input type="email"required autocomplete="off" className="form-input"/>
          </div>
          
          <div className="campos">
            <label className="campos-label">
              Descrição
            </label>
            <input type="text" className="form-input" />
          </div>
            
            <div className="campos">
        <input type="file" className="form-input" />
          </div> 
          <button className="button button-block">Anexar</button> 
          </form>
        </div>
      </div>
    </div>
 <div className="info">
    <div className='containerTurma'>
  <h2 className="turma"> 
  <span className="cor"> Turma: </span> Recursos Humanos<span className="cor"><br /> Disciplina: </span> Teoria da Administração
  <span className="cor"><br /> Semestre: </span> 2°  <span className="cor"><br /> Período: </span> Manhã</h2>
  </div>
   
<div className="envios"> <h2 className="envios-text"> Envios Recentes</h2> 
    <ul className="FileList">
      <li className="arquivos">
        <div className="File">
          <input type="checkbox" className="fileinput" id="file--01"/>
          <i className="bi bi-file-pdf"></i>     
          <span className="File-name has-Icon">
            Documento 1
          </span>
        </div>
      </li>
      <li>
        <div className="File">
         <input type="checkbox" className="fileinput" id="file--02"/>
          <i className="bi bi-file-earmark-check"></i>
          <span className="File-name has-Icon">
             Tarefa 01 - Lista
          </span>
        </div>
      </li>
      <li>
        <div className="File">
          <input type="checkbox"className="fileinput" id="file--03"/>
          <i className="bi bi-file-image"></i>
          <span className="File-name has-Icon">
            Img.png
          </span>
        </div>
      </li>
    </ul>
  <button className="change"> <i className="bi bi-trash"> </i> Apagar Itens</button>
  <button className="change"> <i className="bi bi-pencil-square"> </i>Editar Itens</button>
  </div>
 </div>
        </div>
     
     

    

</div>




    </div>
  )
}

export default Tarefas