import Container from '../../../components/Container/Container'
import Header from '../../../components/Header/Header'

import '../../../styles/global.css'

export default function BuscaFuncionario() {
    return (
        <div className="global">
            <Header type="secretaria" />
            <main>
                <Container title="Consultar Funcionários" type="funcionario" section="tabela" />
            </main>
        </div>
    )
}