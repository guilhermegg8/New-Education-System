import '../../Table.css'
import { FiEdit } from 'react-icons/fi'

export default function TableSolicitacao() {
    // =============== DATATABLES SETTINGS ===============
    $(document).ready(function () {
        $('#example').DataTable({
            scrollY: 300,
            paging: false,
            responsive: true,
            dom: '<"top"if>rt',
        })
    })

    return (
        <table id="example" className="display responsive nowrap">
            <thead>
                <tr>
                    <th>Registro</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>30001</td>
                    <td>Pedro Pessina</td>
                    <td>DSM</td>
                    <td>Certificado de Conclusão</td>
                    <td>Recusado</td>
                    <td><a href="/secretaria/update-solicitacao"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>30002</td>
                    <td>Gustavo Nascimento</td>
                    <td>DSM</td>
                    <td>Afastamento</td>
                    <td>Concluído</td>
                    <td><a href="/secretaria/update-solicitacao"><FiEdit /></a></td>
                </tr>
            </tbody>
        </table>
    )
}