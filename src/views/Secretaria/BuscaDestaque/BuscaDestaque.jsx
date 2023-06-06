import Container from '../../../components/Container/Container'
import Header from '../../../components/Header/Header'

import '../../../styles/global.css'

export default function BuscaDestaque() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Consultar Destaques" type="destaque" section="tabela" />
            </main>
        </div>
    )
}