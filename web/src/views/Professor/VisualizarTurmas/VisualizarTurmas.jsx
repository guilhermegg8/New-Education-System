import "./VisualizarTurmas.css"


import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

const VisualizarTurmas = () => {
  // =============== DATATABLES SETTINGS ===============
$(document).ready(function () {
  $('#example').DataTable({
      responsive: true,
      retrieve: true,
      paging: true
  });
});

// =============== ACTIONS TABLE SETTINGS ===============
const deleteBtn = document.querySelectorAll('.column-action_delete')

deleteBtn.forEach(btn => {
  btn.addEventListener('click', onClickDeleteBtn)
});

function onClickDeleteBtn() {
  Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#a4cbe0',
      cancelButtonColor: '#ff7575',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, deletar!'
  }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire(
              'Deletado!',
              'Registro apagado com sucesso.',
              'success'
          )
      }
  })
}
 return (

    <div className="global">
                <Header type="professor"/> 
                <main className="mainVisualizar">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-10">
                           <table id="example" className="table table-striped display nowrap" cellSpacing="0">
                                        <thead>
                                            <tr className= "teste">
                                             <th className= "campos">Curso</th>
                                                <th className= "campos">Sigla</th>
                                                <th className= "campos">Disciplina</th>
                                                <th className= "campos">Semestre</th>
                                                <th className= "campos">Periodo</th>
                                              <th> Lançar Faltas ou Notas </th>
                                              <th> Cadastrar Plano de Aula</th>
                                              <th> Anexar Documentos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                  </td>
                                            </tr>

                                                    
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className ="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>              
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                    </a>
                                                </td>                                                                        
                                            </tr>

                                                    
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className ="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                 <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                    </a>
                                                </td>
                                            </tr>
                                                    
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr>
                                                    
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr> 
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr> 
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr> 
                                            <tr>
                                                <td id="curso">DSM</td>
                                                <td className="dados">IES012</td>
                                                <td className ="dados">Engenharia de Software II</td>
                                                <td className ="dados">Segundo</td>
                                                <td className ="dados">Manhã</td>
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#699bf7" d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                                                    </a>
                                                </td>
                                                   
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12m11-15v14m-7-7h14"/><path d="M30 4v10h10"/></g></svg>
                                                    </a>
                                                </td>
                                             
                                                <td className="column-action column-action_edit">
                                                    <a href="./employee-update.html">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 72v120a32 32 0 0 0 32 32h120"/><path fill="none" stroke="#699bf7" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144"/> </svg>
                                                  </a>
                                                </td>
                                            </tr>      
                                        </tbody>
                            </table>
                        </div>       
                      </div>
                    </div>
                </main>
    </div>
  )
}

export default VisualizarTurmas