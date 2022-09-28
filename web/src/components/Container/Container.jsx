import './Container.css'

import '../../styles/global.css'

import FormFuncionario from '../FormFuncionario/FormFuncionario'
import FormAluno from '../FormAluno/FormAluno'
import FormDestaque from '../FormDestaque/FormDestaque'
import FormCurso from '../FormCurso/FormCurso'
import FormDisciplina from '../FormDisciplina/FormDisciplina'

import TableAluno from '../TableAluno/TableAluno'
import TableCurso from '../TableCurso/TableCurso'
import TableFuncionario from '../TableFuncionario/TableFuncionario'
import TableDestaque from '../TableDestaque/TableDestaque'
import TableDisciplina from '../TableDisciplina/TableDisciplina'

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
            ) : section === "consulta" ? (
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