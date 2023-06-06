import './home.css';
import User from "../../../assets/Perfil.webp";
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function Home() {
  return (
    <>
      <Header type="secretaria" />
      <div>
        <section className="perfil">
          <img src={User} />
          <div className="profile">
            <p> Nome: <span className="Text-active">Maria</span></p>
            <p>Registro:<span className="Text-active"> 00000000000</span></p>
            <p>E-mail institucional:  <span className="Text-active">
              abc.def@inst.sp.gov.br  </span></p>
            <p>Situação:<span className="Text-active"> Ativo </span> </p>
            <p>Periodo de Trabalho: <span className="Text-active">Manhã</span> </p>
          </div>
        </section>
        <section className="tarefas">
          <h1>TAREFAS</h1>
          <ol className="tasks">
            <li><a href="">Novas solicitações de documentos</a></li>
            <li><a href="#">Cadastrar novo professor</a></li>
            <li><a href="#">Aluno trancou o curso</a></li>
          </ol>
        </section>
      </div>
    </>
  )
}