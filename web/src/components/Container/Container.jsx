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
import TableSolicitacao from '../Tables/TableSolicitacao/TableSolicitacao'

import FormUpdateAluno from '../Forms/FormUpdateAluno/FormUpdateAluno'

import FormUpdateDestaque from '../Forms/FormUpdateDestaque/FormUpdateDestaque'
import FormUpdateCurso from '../Forms/FormUpdateCurso/FormUpdateCurso'
import FormUpdateDisciplina from '../Forms/FormUpdateDisciplina/FormUpdateDisciplina'
import FormUpdateSolicitacao from '../Forms/FormUpdateSolicitacao/FormUpdateSolicitacao'
import FormUpdateFuncionario from '../Forms/FormUpdateFuncionario/FormUpdateFuncionario'

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
                ) : type === "update-funcionario" ? (
                    <FormUpdateFuncionario />
                ) : type === "update-aluno" ? (
                    <FormUpdateAluno />
                ) : type === "update-destaque" ? (
                    <FormUpdateDestaque />
                ) : type === "update-curso" ? (
                    <FormUpdateCurso />
                ) : type === "update-disciplina" ? (
                    <FormUpdateDisciplina />
                ) : type === "update-solicitacao" ? (
                    <FormUpdateSolicitacao />
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
                ) : type === "solicitacao" ? (
                    <TableSolicitacao />
                ) : type === ""
            ) : section === ""}
        </div>
    )
}