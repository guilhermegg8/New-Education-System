import './Container.css'

import '../../styles/global.css'

import FormFuncionario from '../Forms/FormFuncionario/FormFuncionario'
import FormAluno from '../Forms/FormAluno/FormAluno'
import FormDestaque from '../Forms/FormDestaque/FormDestaque'
import FormCurso from '../Forms/FormCurso/FormCurso'
import FormDisciplina from '../Forms/FormDisciplina/FormDisciplina'

import TableAluno from '../Tables/TableAluno/TableAluno'
import TableCurso from '../Tables/TableCurso/TableCurso'
import TableFuncionario from '../Tables/TableFuncionario/TableFuncionario'
import TableDestaque from '../Tables/TableDestaque/TableDestaque'
import TableDisciplina from '../Tables/TableDisciplina/TableDisciplina'

import { IoIosArrowDropleftCircle } from 'react-icons/io'

export default function Container({ title, type, section }) {
    return (
        <div className='container-page'>
            <h1 className="container-title">
                <IoIosArrowDropleftCircle className='container-icon' />
                {title}
            </h1>
            {section === "formulario" ? (
                type === "funcionario" ? (
                    <FormFuncionario />
                ) : type === "aluno" ? (
                    <FormAluno />
                ) : type === "destaque" ? (
                    <FormDestaque />
                ) : type === "curso" ? (
                    <FormCurso />
                ) : type === "disciplina" ? (
                    <FormDisciplina />
                ) : type === ""
            ) : section === "tabela" ? (
                type === "funcionario" ? (
                    <TableFuncionario />
                ) : type === "aluno" ? (
                    <TableAluno />
                ) : type === "destaque" ? (
                    <TableDestaque />
                ) : type === "curso" ? (
                    <TableCurso />
                ) : type === "disciplina" ? (
                    <TableDisciplina />
                ) : type === ""
            ) : section === ""}
        </div>
    )
}