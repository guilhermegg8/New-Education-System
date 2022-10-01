import "./Header.css"

import { FaTasks, FaWheelchair } from "react-icons/fa"
import { TbLetterA } from "react-icons/tb"
import { BiPlus, BiMinus, BiBookAdd } from "react-icons/bi"
import { RiUserAddLine, RiUserFollowLine, RiUserSearchLine } from "react-icons/ri"
import { AiOutlinePlusCircle, AiFillCloseCircle, AiOutlineFileText } from "react-icons/ai"
import { BsCalendar4, BsShieldCheck, BsChatSquareText, BsArchive, BsSearch, BsInfoCircle, BsBook, BsFolder } from "react-icons/bs"

export default function Header({ type }) {
    return (
        <header>
            <div className="accessibility">
                <a href="#" className="accessibility-link" title="Acessibilidade">
                    <FaWheelchair className="accessibility-icon" />
                </a>
                <button id="change-contrast" title="Modo Constraste">
                    <button className="contrast" role="switch" aria-checked="false" onClick={contrastTheme}>
                    </button>
                </button>
                <a href="#" className="accessibility-link" id="increase" title="Aumentar Fonte">
                    <TbLetterA className="accessibility-icon" />
                    <sup>
                        <BiPlus />
                    </sup>
                </a>
                <a href="#" className="accessibility-link" id="decrease" title="Dimunuir Fonte">
                    <TbLetterA className="accessibility-icon" />
                    <sup>
                        <BiMinus />
                    </sup>
                </a>
            </div>
            <nav className="nav">
                <img className="nav-logo" title="New Education System" />

                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        {type === "aluno" ? (
                            <>
                                <li className="nav-item">
                                    <a href="/aluno/matricula" className="nav-link nav-link" title="Matrícula">
                                        <BsInfoCircle className="link-icon" />
                                        <span className="link-text">Matrícula</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/aluno/consultas" className="nav-link" title="Consultas">
                                        <BsSearch className="link-icon" />
                                        <span className="link-text">Consultas</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/aluno/agenda" className="nav-link" title="Agenda">
                                        <BsCalendar4 className="link-icon" />
                                        <span className="link-text">Agenda</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Segurança">
                                        <BsShieldCheck className="link-icon" />
                                        <span className="link-text">Segurança</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/aluno/solicitacoes" className="nav-link" title="Solicitações">
                                        <BsChatSquareText className="link-icon" />
                                        <span className="link-text">Solicitações</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Upload de Arquivos">
                                        <BsArchive className="link-icon" />
                                        <span className="link-text">Upload Arquivos</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/aluno/plano-ensino" className="nav-link" title="Plano de Ensino">
                                        <BsBook className="link-icon" />
                                        <span className="link-text">Plano de Ensino</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" title="Matriz Inglês">
                                        <BsFolder className="link-icon" />
                                        <span className="link-text">Matriz Inglês</span>
                                    </a>
                                </li>
                            </>
                        ) : type === "secretaria" ? (
                            <>
                                <li className="nav-item">
                                    <a href="/secretaria/home" className="nav-link nav-link" title="Perfil">
                                        <BsInfoCircle className="link-icon" />
                                        <span className="link-text">Perfil</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/novo-funcionario" className="nav-link nav-link" title="Cadastrar Funcionário">
                                        <RiUserAddLine className="link-icon" />
                                        <span className="link-text">Cadastrar Funcionário</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/busca-funcionario" className="nav-link nav-link" title="Consultar Funcionário">
                                        <RiUserSearchLine className="link-icon" />
                                        <span className="link-text">Consultar Funcionário</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/novo-aluno" className="nav-link nav-link" title="Cadastrar Aluno">
                                        <RiUserAddLine className="link-icon" />
                                        <span className="link-text">Cadastrar Aluno</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/busca-aluno" className="nav-link nav-link" title="Consultar Aluno">
                                        <RiUserSearchLine className="link-icon" />
                                        <span className="link-text">Consultar Aluno</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/solicitacoes" className="nav-link nav-link" title="Solicitações de Documentos">
                                        <AiOutlineFileText className="link-icon" />
                                        <span className="link-text">Solicitações de Documentos</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/novo-destaque" className="nav-link nav-link" title="Novo Destaque">
                                        <AiOutlinePlusCircle className="link-icon" />
                                        <span className="link-text">Novo Destaque</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/busca-destaques" className="nav-link nav-link" title="Consultar Destaques">
                                        <BsSearch className="link-icon" />
                                        <span className="link-text">Consultar Destaques</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/novo-curso" className="nav-link nav-link" title="Novo Curso">
                                        <AiOutlinePlusCircle className="link-icon" />
                                        <span className="link-text">Novo Curso</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/busca-curso" className="nav-link nav-link" title="Consultar Cursos">
                                        <BsSearch className="link-icon" />
                                        <span className="link-text">Consultar Cursos</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/nova-disciplina" className="nav-link nav-link" title="Nova Disciplina">
                                        <AiOutlinePlusCircle className="link-icon" />
                                        <span className="link-text">Nova Disciplina</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/secretaria/busca-disciplina" className="nav-link nav-link" title="Consultar Disciplinas">
                                        <BsSearch className="link-icon" />
                                        <span className="link-text">Consultar Disciplinas</span>
                                    </a>
                                </li>
                            </>
                        ) : type === "professor" ? (
                            <>

                                <li className="nav-item">
                                    <a href="/professor/home" className="nav-link nav-link" title="Matrícula">
                                        <BsInfoCircle className="link-icon" />
                                        <span className="link-text">Perfil</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/professor/visualizar-turmas" className="nav-link nav-link" title="Matrícula">
                                        <BsSearch className="link-icon" />
                                        <span className="link-text">Visualizar Turmas</span>
                                    </a>
                                </li>
                                <li className="nav-item">

                                    <a href="/professor/plano-de-aula" className="nav-link nav-link" title="Matrícula">
                                        <BiBookAdd className="link-icon" />
                                        <span className="link-text">Cadastrar Plano <br /> de Aula</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/professor/declaracao-notas" className="nav-link nav-link" title="Matrícula">
                                        <AiOutlinePlusCircle className="link-icon" />
                                        <span className="link-text">Cadastrar Nota</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/professor/frequencia" className="nav-link nav-link" title="Matrícula">
                                        <RiUserFollowLine className="link-icon" />
                                        <span className="link-text">Cadastrar Presença</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/professor/tarefas" className="nav-link nav-link" title="Matrícula">
                                        <FaTasks className="link-icon" />
                                        <span className="link-text">Adicionar Tarefas</span>
                                    </a>
                                </li>
                            </>
                        ) : (<></>)}
                        <li className="nav-item">
                            <button className="nav-link change-theme" title="Mudar Tema" onClick={darkTheme}>
                                <button className="checkbox" role="switch" aria-checked="false" />
                                <span className="link-text">Mudar Tema</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="nav-options">
                    <a href="/" className="nav-link" title="Fazer Logout">
                        <AiFillCloseCircle className="link-icon link-exit" />
                        <span className="link-text">Sair</span>
                    </a>
                    <div className="menu-burger nav-toggle" onClick={showMenu}>
                        <div></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

/*=============== SHOW MENU ===============*/
const showMenu = () => {
    const nav = document.querySelector('.nav-menu'),
        toggle = document.querySelector('.nav-toggle')

    nav.classList.toggle('show-menu')
    toggle.classList.toggle('close')
}

/*=============== DARK THEME ===============*/
const darkTheme = () => {
    const switchButton = document.querySelector('.change-theme'),
        body = document.querySelector('body #root .global'),
        darkTheme = 'dark-theme',
        iconTheme = 'on'

    // Adiciona ou remove a classe 'dark-theme' ao body
    body.classList.toggle(darkTheme)
    switchButton.classList.toggle(iconTheme)
}

const contrastTheme = () => {
    const switchButton = document.querySelector('#change-contrast'),
        body = document.querySelector('body #root .global'),
        contrastTheme = 'body-contrast',
        iconContrast = 'on'

    //Adiciona ou remove a classe 'body-contrast' ao body
    body.classList.toggle(contrastTheme)
    switchButton.classList.toggle(iconContrast)
}