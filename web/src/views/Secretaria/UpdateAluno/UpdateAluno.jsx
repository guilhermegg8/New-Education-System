import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function UpdateAluno() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Editar Aluno" type="update-aluno" section="formulario" />
            </main>
        </div>
    )
}