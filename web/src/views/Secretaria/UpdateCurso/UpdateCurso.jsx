import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function UpdateCurso() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Editar Curso" type="update-curso" section="formulario" />
            </main>
        </div>
    )
}