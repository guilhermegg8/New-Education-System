import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function NovaDisciplina() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Nova Disciplina" type="disciplina" section="formulario" />
            </main>
        </div>
    )
}