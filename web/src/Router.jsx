import { Route, Routes } from "react-router-dom"
import Login from './pages/Login/Login'
import Matricula from './pages/Matricula/Matricula'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/matricula" element={<Matricula />} />
        </Routes>
    )
}