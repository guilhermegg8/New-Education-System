import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

import "./NovoFuncionario.css"

export default function NovoFuncionario() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Novo Funcionário" type="funcionario" section="formulario" />
            </main>
        </div>
    )
}