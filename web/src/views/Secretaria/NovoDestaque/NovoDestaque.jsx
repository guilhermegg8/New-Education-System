import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function NovoDestaque() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Novo Destaque" type="destaque" section="formulario" />
            </main>
        </div>
    )
}