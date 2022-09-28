// import styles from './Perfil.module.css';
import './Perfil.css';
import User from "../../../assets/Perfil.webp";
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function Perfil() {
  return (
    <div className='global'>            
    <Header type="professor" />

        <main>

          <section className ="perfil">
                <img src={User} />
            
                <div className= "profile">
                  <p> Nome: <span className="Text-active">Claudio  </span></p>

                  <p>RP:<span className="Text-active"> 00000000000 </span> </p>

                  <p>Cargo: <span className="Text-active">Professor e DIRETOR  </span></p>

                  <p>E-mail institucional:  <span className="Text-active">
                  abc.def@inst.sp.gov.br  </span></p>

                  <p>Situação:<span className="Text-active"> Ativo </span> </p>

                  <p>Periodo de Trabalho: <span className="Text-active">Manha, Tarde, Noite  </span> </p>
                </div>
        </section>
        <section className="tarefas">
          <h1> TAREFAS</h1>
          <ol className="tasks">
            <li><a href="">Nota 2 ADS</a></li>
            <li><a href="#">Nota N1 DSM 2º Semestre</a></li>
            <li><a href="#">Faltas ultima aula mes abril</a></li>
          </ol>
        </section>

      </main>
  






    </div>
  )
}