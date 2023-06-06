import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function UpdateFuncionario() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Editar Funcionário" type="update-funcionario" section="formulario" />
            </main>
        </div>
    )
}