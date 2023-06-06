import "./DeclaracaoNotas.css"
import User from "../../../assets/Perfil.webp"
import Header from "../../../components/Header/Header"
import "../../../styles/global.css"

const DeclaracaoNotas = () => {
  return (
    <div className="global">
    <Header type="professor"/>
         <div className="containerNotas">
        <div className="headerNotas">
                <h2>Recursos Humanos 2° <br />
                semestre - Manhã</h2>
                <label htmlFor="cbOrderAfa" className="alfa_order">Alfa. ord.</label>
                
                <button value="1" className="bt_alfa_order" id="Myelement"></button>
                
                <label htmlFor="cbOrderRA" className="ra_order">RA. ord.</label>
                <button className="bt_ra_order"></button>
        </div>
        <div className="handleNotasAluno">
                <h5 className="desc_curso_semestre">Curso/Semestre </h5>
                <div className="container_data_enviar">
                
                    <input type="date" name="daChamada" id="daChamada" />
                    <span id="#"></span>
                    <button className="bt_enviar_nota">Enviar</button>
                </div>
        </div>
        <div className="containerNotasAluno">
            <div className="cardNotasAluno">
                    <img  src={User} alt="" />
                    <div>
                        <h4 className="txt_nome_do_aluno">Vicenzzo Toth</h4>
                        <p className="txt_ra_aluno">RA: 11112222333</p>
                        <a href="#" className="link_mais_infos_aluno">Mais Infos</a>
                    </div>
                    <div className="container_titulos_das_notas">
                        <label className="titulo_notas_nota_um" htmlFor="">N1</label>
                        <label className="titulo_notas_nota_dois" htmlFor="">N2</label>
                        <label className="titulo_notas_nota_tres" htmlFor="">N3</label>
                        <label className="titulo_notas_trabalho" htmlFor="">T</label>
                    </div>
                    <div className="container_input_notas">
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                    </div>
            </div>
            <div className="cardNotasAluno">
                    <img  src={User} alt="" />
                    <div>
                        <h4 className="txt_nome_do_aluno">Vicenzzo Toth</h4>
                        <p className="txt_ra_aluno">RA: 11112222333</p>
                        <a href="#" className="link_mais_infos_aluno">Mais Infos</a>
                    </div>
                    <div className="container_titulos_das_notas">
                        <label className="titulo_notas_nota_um" htmlFor="">N1</label>
                        <label className="titulo_notas_nota_dois" htmlFor="">N2</label>
                        <label className="titulo_notas_nota_tres" htmlFor="">N3</label>
                        <label className="titulo_notas_trabalho" htmlFor="">T</label>
                    </div>
                    <div className="container_input_notas">
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                    </div>
            </div>
            <div className="cardNotasAluno">
                    <img  src={User} alt="" />
                    <div>
                        <h4 className="txt_nome_do_aluno">Vicenzzo Toth</h4>
                        <p className="txt_ra_aluno">RA: 11112222333</p>
                        <a href="#" className="link_mais_infos_aluno">Mais Infos</a>
                    </div>
                    <div className="container_titulos_das_notas">
                        <label className="titulo_notas_nota_um" htmlFor="">N1</label>
                        <label className="titulo_notas_nota_dois" htmlFor="">N2</label>
                        <label className="titulo_notas_nota_tres" htmlFor="">N3</label>
                        <label className="titulo_notas_trabalho" htmlFor="">T</label>
                    </div>
                    <div className="container_input_notas">
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                        <input className="input_text_notas" type="text" maxlength="3" />
                    </div>
            </div>
           
           
            
        </div>
    </div>
    </div>
  )
}

export default DeclaracaoNotas