import Container from '../../../components/Container/Container'
import Header from '../../../components/Header/Header'

import '../../../styles/global.css'

export default function BuscaCurso() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Consultar Cursos" type="curso" section="tabela" />
            </main>
        </div>
    )
}