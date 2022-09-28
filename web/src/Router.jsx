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

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/aluno/matricula" element={<Matricula />} />

            <Route path="/secretaria/home" element={<Home />} />
            <Route path="/secretaria/novo-funcionario" element={<NovoFuncionario />} />
            <Route path="/secretaria/busca-funcionario" element={<BuscaFuncionario />} />
            <Route path="/secretaria/novo-aluno" element={<NovoAluno />} />
            <Route path="/secretaria/busca-aluno" />
            <Route path="/secretaria/solicitacoes" />
            <Route path="/secretaria/novo-destaque" element={<NovoDestaque />} />
            <Route path="/secretaria/busca-destaques" />
            <Route path="/secretaria/novo-curso" element={<NovoCurso />} />
            <Route path="/secretaria/busca-curso" />
            <Route path="/secretaria/nova-disciplina" element={<NovaDisciplina />} />
            <Route path="/secretaria/busca-disciplina" />

            <Route path="/professor/frequencia" element={<Frequencia />} />
            <Route path="/professor/home" element={<Perfil />} />
            <Route path="/professor/plano-de-aula" element={<CadastroPlanoDeAula />} />
            <Route path="/professor/tarefas" element={<Tarefas />} />
            <Route path="/professor/visualizar-turmas" element={<VisualizarTurmas />} />
            <Route path="/professor/declaracao-notas" element={<DeclaracaoNotas />} />
            
            
        </Routes>

    )
}