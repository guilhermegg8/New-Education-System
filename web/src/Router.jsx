import { Route, Routes } from "react-router-dom"

import Login from './views/Login/Login'
import Matricula from './views/Aluno/Matricula/Matricula'
import NovoFuncionario from "./views/Secretaria/NovoFuncionario/NovoFuncionario"
import Perfil from "./views/Professor/Perfil/Perfil"
import Frequencia from "./views/Professor/Frequencia/Frequencia"
import CadastroPlanoDeAula from './views/Professor/CadastroPlanoDeAula/CadastroPlanoDeAula'
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/aluno/matricula" element={<Matricula />} />
            <Route path="/professor/perfil" element={<Perfil />} />
            <Route path="/secretaria/novo-funcionario" element={<NovoFuncionario />} />
            <Route path="/professor/frequencia" element={<Frequencia />} />
            <Route path="/professor/plano-de-aula" element={<CadastroPlanoDeAula/>}/>
           
    
        </Routes>
        
    )
}