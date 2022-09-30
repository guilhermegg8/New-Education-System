import Container from "../../../components/Container/Container"
import Header from "../../../components/Header/Header"

import "../../../styles/global.css"

export default function UpdateDestaque() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Editar Destaque" type="update-destaque" section="formulario" />
            </main>
        </div>
    )
}