import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function NovoAluno() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Novo Aluno" type="aluno" section="formulario" />
            </main>
        </div>
    )
}