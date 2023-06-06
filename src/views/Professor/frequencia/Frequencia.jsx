import './Frequencia.css'
import User from "../../../assets/Perfil.webp";


import Header from "../../../components/Header/Header"

import "../../../styles/global.css"
const Frequencia = () => {
  return (
    <div className='global'>
    <Header type="professor" className="headerFrequencia"/>
    <main>
    <div className='teste2'>
     <div className="containerChamada">
            <div className="headerChamada">
                <h2>Recursos Humanos 2° <br />
                semestre - Manhã</h2>
                <label htmlFor="cbOrderAfa" className='titleFilterAlfa'>Alfa. ord.</label>
                
                <button className='filter'></button>
                
                <label htmlFor="cbOrderRA" className='titleFilterRA'>RA. ord.</label>
                <button className='filter'></button>
            </div>
            <div className="c">
                <h5 className='handleTitleChamadaCurso'>Curso/Semestre </h5>
                <div className='containerSubHeadle'>
                 
                    <input type="date" name="daChamada" id="daChamada" />
                    <span id="#"></span>
                    <button className='handleEnviar'>Enviar</button>
                </div>
            </div>
            <div className="containerChamadaAluno">
                <div className="cardChamadaAluno">
                     <img  src={User} alt="" />
                     <div className='cardAluno'>
                        <h4 className='nomeAluno'>Vicenzzo Toth</h4>
                        <p className='identrAluno'>RA: 11112222333</p>
                        <a className='infosMais' href="#">Mais Infos</a>
                    </div>
                    <div className='cardButtonFaltou'>
                     <button className='btnFaltou'></button>
                     <p className='pFaltou'>Faltou</p>
                    </div>
                </div>
                <div className="cardChamadaAluno">
                     <img  src={User} alt="" />
                     <div className='cardAluno'>
                        <h4 className='nomeAluno'>Vicenzzo Toth</h4>
                        <p className='identrAluno'>RA: 11112222333</p>
                        <a className='infosMais' href="#">Mais Infos</a>
                    </div>
                    <div className='cardButtonFaltou'>
                     <button className='btnFaltou'></button>
                     <p className='pFaltou'>Faltou</p>
                    </div>
                </div>
                <div className="cardChamadaAluno">
                     <img  src={User} alt="" />
                     <div className='cardAluno'>
                        <h4 className='nomeAluno'>Vicenzzo Toth</h4>
                        <p className='identrAluno'>RA: 11112222333</p>
                        <a className='infosMais' href="#">Mais Infos</a>
                    </div>
                    <div className='cardButtonFaltou'>
                     <button className='btnFaltou'></button>
                     <p className='pFaltou'>Faltou</p>
                    </div>
                </div>
                <div className="cardChamadaAluno">
                     <img  src={User} alt="" />
                     <div className='cardAluno'>
                        <h4 className='nomeAluno'>Vicenzzo Toth</h4>
                        <p className='identrAluno'>RA: 11112222333</p>
                        <a className='infosMais' href="#">Mais Infos</a>
                    </div>
                    <div className='cardButtonFaltou'>
                     <button className='btnFaltou'></button>
                     <p className='pFaltou'>Faltou</p>
                    </div>
                </div>
                <div className="cardChamadaAluno">
                     <img  src={User} alt="" />
                     <div className='cardAluno'>
                        <h4 className='nomeAluno'>Vicenzzo Toth</h4>
                        <p className='identrAluno'>RA: 11112222333</p>
                        <a className='infosMais' href="#">Mais Infos</a>
                    </div>
                    <div className='cardButtonFaltou'>
                     <button className='btnFaltou'></button>
                     <p className='pFaltou'>Faltou</p>
                    </div>
                </div>
                <div className="cardChamadaAluno">
                     <img  src={User} alt="" />
                     <div className='cardAluno'>
                        <h4 className='nomeAluno'>Vicenzzo Toth</h4>
                        <p className='identrAluno'>RA: 11112222333</p>
                        <a className='infosMais' href="#">Mais Infos</a>
                    </div>
                    <div className='cardButtonFaltou'>
                     <button className='btnFaltou'></button>
                     <p className='pFaltou'>Faltou</p>
                    </div>
                </div>
               
                
            </div>
        </div>
    </div>
    </main>
    </div>
   
  )
}

export default Frequencia