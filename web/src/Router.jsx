import { Route, Routes } from "react-router-dom"

import Login from './views/Login/Login'
import Matricula from './views/Aluno/Matricula/Matricula'
import NovoFuncionario from "./views/Secretaria/NovoFuncionario/NovoFuncionario"


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/aluno/matricula" element={<Matricula />} />
            <Route path="/secretaria/novo-funcionario" element={<NovoFuncionario />} />
            
            
        </Routes>
        
    )
}