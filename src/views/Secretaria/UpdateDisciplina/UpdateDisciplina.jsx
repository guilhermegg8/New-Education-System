import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function UpdateDisciplina() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Editar Disciplina" type="update-disciplina" section="formulario" />
            </main>
        </div>
    )
}