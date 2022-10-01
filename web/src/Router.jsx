import { Route, Routes } from "react-router-dom"

import Login from './views/Login/Login'
import Matricula from './views/Aluno/Matricula/Matricula'
import NovoFuncionario from "./views/Secretaria/NovoFuncionario/NovoFuncionario"
import NovoAluno from "./views/Secretaria/NovoAluno/NovoAluno"
import NovoDestaque from "./views/Secretaria/NovoDestaque/NovoDestaque"
import NovoCurso from "./views/Secretaria/NovoCurso/NovoCurso"
import NovaDisciplina from "./views/Secretaria/NovaDisciplina/NovaDisciplina"

import Home from "./views/Secretaria/home/home"
import Perfil from "./views/Professor/Perfil/Perfil"
import Frequencia from "./views/Professor/Frequencia/Frequencia"
import CadastroPlanoDeAula from './views/Professor/CadastroPlanoDeAula/CadastroPlanoDeAula'
import Tarefas from "./views/Professor/CadastroTarefas/Tarefas"
import VisualizarTurmas from "./views/Professor/VisualizarTurmas/VisualizarTurmas"
import DeclaracaoNotas from "./views/Professor/DeclaracaoNotas/DeclaracaoNotas"

import BuscaFuncionario from "./views/Secretaria/BuscaFuncionario/BuscaFuncionario"
import BuscaAluno from "./views/Secretaria/BuscaAluno/BuscaAluno"
import BuscaDestaque from "./views/Secretaria/BuscaDestaque/BuscaDestaque"
import BuscaCurso from "./views/Secretaria/BuscaCurso/BuscaCurso"
import BuscaDisciplina from "./views/Secretaria/BuscaDisciplina/BuscaDisciplina"
import BuscaSolicitacao from "./views/Secretaria/BuscaSolicitacao/BuscaSolicitacao"

import UpdateSolicitacao from "./views/Secretaria/UpdateSolicitacao/UpdateSolicitacao"
import UpdateFuncionario from "./views/Secretaria/UpdateFuncionario/UpdateFuncionario"
import UpdateAluno from "./views/Secretaria/UpdateAluno/UpdateAluno"
import UpdateDestaque from "./views/Secretaria/UpdateDestaque/UpdateDestaque"
import UpdateCurso from "./views/Secretaria/UpdateCurso/UpdateCurso"
import UpdateDisciplina from "./views/Secretaria/UpdateDisciplina/UpdateDisciplina"
import Consultas from "./views/Aluno/Consultas/Consultas"
import Agenda from "./views/Aluno/Agenda/Agenda"
import Solicitacoes from "./views/Aluno/Solicitacoes/Solicitacoes"
import PlanoEnsino from "./views/Aluno/PlanoEnsino/PlanoEnsino"

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/aluno/matricula" element={<Matricula />} />
            <Route path="/aluno/consultas" element={<Consultas />} />
            <Route path="/aluno/agenda" element={<Agenda />} />
            <Route path="/aluno/solicitacoes" element={<Solicitacoes />} />
            <Route path="/aluno/plano-ensino" element={<PlanoEnsino />} />

            {/*========== ROTAS PARA SECRETARIA ==========*/}
            <Route path="/secretaria/home" element={<Home />} />

            <Route path="/secretaria/novo-funcionario" element={<NovoFuncionario />} />
            <Route path="/secretaria/busca-funcionario" element={<BuscaFuncionario />} />
            <Route path="/secretaria/update-funcionario" element={<UpdateFuncionario />} />

            <Route path="/secretaria/novo-aluno" element={<NovoAluno />} />
            <Route path="/secretaria/busca-aluno" element={<BuscaAluno />} />
            <Route path="/secretaria/update-aluno" element={<UpdateAluno />} />

            <Route path="/secretaria/solicitacoes" element={<BuscaSolicitacao />} />
            <Route path="/secretaria/update-solicitacao" element={<UpdateSolicitacao />} />

            <Route path="/secretaria/novo-destaque" element={<NovoDestaque />} />
            <Route path="/secretaria/busca-destaques" element={<BuscaDestaque />} />
            <Route path="/secretaria/update-destaque" element={<UpdateDestaque />} />

            <Route path="/secretaria/novo-curso" element={<NovoCurso />} />
            <Route path="/secretaria/busca-curso" element={<BuscaCurso />} />
            <Route path="/secretaria/update-curso" element={<UpdateCurso />} />

            <Route path="/secretaria/nova-disciplina" element={<NovaDisciplina />} />
            <Route path="/secretaria/busca-disciplina" element={<BuscaDisciplina />} />
            <Route path="/secretaria/update-disciplina" element={<UpdateDisciplina />} />

            {/*========== ROTAS PARA PROFESSOR ==========*/}
            <Route path="/professor/frequencia" element={<Frequencia />} />
            <Route path="/professor/home" element={<Perfil />} />
            <Route path="/professor/plano-de-aula" element={<CadastroPlanoDeAula />} />
            <Route path="/professor/tarefas" element={<Tarefas />} />
            <Route path="/professor/visualizar-turmas" element={<VisualizarTurmas />} />
            <Route path="/professor/declaracao-notas" element={<DeclaracaoNotas />} />
        </Routes>
    )
}