import "./VisualizarTurmas.css"



const VisualizarTurmas = () => {
    // =============== DATATABLES SETTINGS ===============

  return (
   
    <> 
    <div className="main">
    <div className="turmas">
       <h1>Viualização de turmas</h1>
       <h2>Clique na turma desejada para acessar as funcionalidades </h2>
     </div>
     <div className="container">
      <div className="row">
       <div className="col-lg-10">
     <table className="table">
       <thead>
         <tr className= "teste">
             <th className= "campos">Curso</th>
             <th className= "campos">Sigla</th>
             <th className= "campos">Disciplina</th>
             <th className= "campos">Semestre</th>
       <th className= "campos">Periodo</th>
         </tr>
     </thead>
 
     <tbody>
         <tr className="curso">
         <td id="curso">
         <li className="dropdown-items">
         <input type="checkbox" id="dropdown-selector-1" className="dropdown-input"/>
         <div className="trigger">
         <label htmlFor="dropdown-selector-1" className="dropdown-label"><i className="bi bi-plus"> </i>DSM
         </label>
         
       </div>
       </li>
       <ul className="content">
         <li className="content-items"><a href="#">Lançar Faltas ou Notas <i className="bi bi-pencil-square"></i> </a> </li>
         <li className="content-items"><a href="#">Anexar Documentos e Tarefas <i className="bi bi-file-earmark-plus"> </i> </a> </li>
         <li className="content-items"><a href="#">Cadastrar Plano de Aula <iconify-icon icon="ion:document-attach-outline"></iconify-icon> </a> </li>
       </ul>
         </td>
 
       
     <td className ="dados">IES012</td>
     <td className ="dados">Engenharia de Software II</td>
     <td className ="dados">Segundo</td>
      <td className ="dados">Manhã</td>
         </tr>
     
         <tr className="curso">
         <td id="curso">
         <li className="dropdown-items">
         <input type="checkbox" id="dropdown-selector-2" className="dropdown-input"/>
         <div className="trigger">
         <label htmlFor="dropdown-selector-2" className="dropdown-label"><i className="bi bi-plus"></i>DSM
         </label>
         </div>
         </li>
         
       <ul className="content">
         <li className="content-items"><a href="#">Lançar Faltas ou Notas <i className="bi bi-pencil-square"> </i> </a></li>
         <li className="content-items"><a href="#">Anexar Documentos e Tarefas <i className="bi bi-file-earmark-plus"></i> </a> </li>
         <li className="content-items"><a href="#">Cadastrar Plano de Aula <iconify-icon icon="ion:document-attach-outline"></iconify-icon> </a> </li>
       </ul>
         </td>
       
      <td className ="dados">IES012</td>
     <td className ="dados">Engenharia de Software II</td>
     <td className ="dados">Segundo</td>
      <td className ="dados">Manhã</td>
         </tr>
     
         <tr className="curso">
       <td id="curso">
         <li className="dropdown-items">
         <input type="checkbox" id="dropdown-selector-3" className="dropdown-input"/>
         <div className="trigger">
         <label htmlFor="dropdown-selector-3" className="dropdown-label"><i className="bi bi-plus"> </i>DSM
         </label>
         </div>
         </li>
       <ul className="content">
         <li className="content-items"><a href="#"> Lançar Faltas ou Notas <i className="bi bi-pencil-square"> </i> </a> </li>
         <li className="content-items"><a href="#">Anexar Documentos e Tarefas <i className="bi bi-file-earmark-plus"></i> </a> </li>
         <li className="content-items"><a href="#">Cadastrar Plano de Aula <iconify-icon icon="ion:document-attach-outline"> </iconify-icon> </a> </li>
       </ul>
       </td>
 
       
       <td className ="dados">IES012</td>
     <td className ="dados">Engenharia de Software II</td>
     <td className ="dados">Segundo</td>
      <td className ="dados">Manhã</td>
         </tr>
 
         <tr className="curso">
           <td id="curso"> 
         <li className="dropdown-items">
         <input type="checkbox" id="dropdown-selector-4" className="dropdown-input"/>
         <div className="trigger">
         <label htmlFor="dropdown-selector-4" className="dropdown-label"><i className="bi bi-plus"></i>DSM
         </label>
         </div>
         </li>
       <ul className="content">
         <li className="content-items"><a href="#"> Lançar Faltas ou Notas <i className="bi bi-pencil-square"> </i></a> </li>
         <li className="content-items"><a href="#">Anexar Documentos e Tarefas <i className="bi bi-file-earmark-plus"></i> </a> </li>
         <li className="content-items"><a href="#">Cadastrar Plano de Aula <iconify-icon icon="ion:document-attach-outline"></iconify-icon> </a> </li>
       </ul>
       </td>
       
      <td className ="dados">IES012</td>
     <td className ="dados">Engenharia de Software II</td>
     <td className ="dados">Segundo</td>
      <td className ="dados">Manhã</td>
         </tr>
  
         <tr className="curso">
       <td id="curso"> 
         <li className="dropdown-items">
         <input type="checkbox" id="dropdown-selector-6" className="dropdown-input"/>
         <div className="trigger">
         <label htmlFor="dropdown-selector-6" className="dropdown-label"><i className="bi bi-plus"> </i> DSM
         </label>
       </div>
       </li>
       <ul className="content">
         <li className="content-items"><a href="#">Lançar Faltas ou Notas <i className="bi bi-pencil-square"> </i> </a> </li>
         <li className="content-items"><a href="#">Anexar Documentos e Tarefas <i className="bi bi-file-earmark-plus"></i> </a> </li>
         <li className="content-items"><a href="#">Cadastrar Plano de Aula <iconify-icon icon="ion:document-attach-outline"></iconify-icon> </a ></li>
       </ul>
       </td>
       
       <td className ="dados">IES012</td>
     <td className ="dados">Engenharia de Software II</td>
     <td className ="dados">Segundo</td>
      <td className ="dados">Manhã</td>
         </tr>
     
         <tr className="curso">
           <td id="curso"> 
         <li className="dropdown-items">
         <input type="checkbox" id="dropdown-selector-7" className="dropdown-input"/>
         <div className="trigger">
         <label htmlFor="dropdown-selector-7" className="dropdown-label"><i className="bi bi-plus"></i> DSM
         </label>
         </div>
         </li>
       <ul className="content">
         <li className="content-items"><a href="#"></a>Lançar Faltas ou Notas <i className="bi bi-pencil-square"></i></li>
         <li className="content-items"><a href="#">Anexar Documentos e Tarefas <i className="bi bi-file-earmark-plus"></i></a></li>
         <li className="content-items"><a href="#">Cadastrar Plano de Aula <iconify-icon icon="ion:document-attach-outline"></iconify-icon></a> </li>
       </ul>
       </td>
       
       <td className ="dados">IES012</td>
       <td className ="dados">Engenharia de Software II</td>
       <td className ="dados">Segundo</td>
       <td className ="dados">Manhã</td>
         </tr>
     
     </tbody>
 </table>
       </div>
      </div>
     </div>
  </div>
 
    </>
  )
}

export default VisualizarTurmas