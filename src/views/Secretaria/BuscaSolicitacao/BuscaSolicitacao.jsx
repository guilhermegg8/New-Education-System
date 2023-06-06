import Container from '../../../components/Container/Container'
import Header from '../../../components/Header/Header'

import '../../../styles/global.css'

export default function BuscaSolicitacao() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Solicitações de documentos" type="solicitacao" section="tabela" />
            </main>
        </div>
    )
}