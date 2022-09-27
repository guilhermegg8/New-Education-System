import { Route, Routes } from "react-router-dom"

import Login from './views/Login/Login'
import Matricula from './views/Aluno/Matricula/Matricula'
import NovoFuncionario from "./views/Secretaria/NovoFuncionario/NovoFuncionario"
import Perfil from "./views/Professor/Perfil/Perfil"
import Frequencia from "./views/Professor/Frequencia/Frequencia"
import CadastroPlanoDeAula from './views/Professor/CadastroPlanoDeAula/CadastroPlanoDeAula'
import Tarefas from "./views/Professor/CadastroTarefas/Tarefas"
import VisualizarTurmas from "./views/Professor/VisualizarTurmas/VisualizarTurmas"
import DeclaracaoNotas from "./views/Professor/DeclaracaoNotas/DeclaracaoNotas"
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/aluno/matricula" element={<Matricula />} />
            <Route path="/professor/perfil" element={<Perfil />} />
            <Route path="/secretaria/novo-funcionario" element={<NovoFuncionario />} />
            <Route path="/professor/frequencia" element={<Frequencia />} />
            <Route path="/professor/plano-de-aula" element={<CadastroPlanoDeAula/>}/>
            <Route path="/professor/tarefas" element={<Tarefas/>} />
            <Route path="/professor/visualizar-turmas" element={<VisualizarTurmas/>} />
            <Route path="/professor/declaracao-notas" element={<DeclaracaoNotas/>} />
            
        </Routes>
        
    )
}