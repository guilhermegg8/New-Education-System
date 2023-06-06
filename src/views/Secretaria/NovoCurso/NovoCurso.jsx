import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function NovoCurso() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Novo Curso" type="curso" section="formulario" />
            </main>
        </div>
    )
}