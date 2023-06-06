import Container from '../../../components/Container/Container'
import Header from '../../../components/Header/Header'

import '../../../styles/global.css'

export default function BuscaAluno() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Consultar Alunos" type="aluno" section="tabela" />
            </main>
        </div>
    )
}