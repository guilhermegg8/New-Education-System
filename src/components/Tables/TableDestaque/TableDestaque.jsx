import '../../Table.css'
import { FiEdit } from 'react-icons/fi'

export default function TableDestaque() {
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
        <table id="example" className="display responsive">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Curso</th>
                    <th>Data</th>
                    <th>Responsável</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Museu da Língua Portuguesa</td>
                    <td>Aviso</td>
                    <td>Todos</td>
                    <td>05/10/2022</td>
                    <td>NES</td>
                    <td><a href="/secretaria/update-destaque"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>Pinacoteca</td>
                    <td>Passeio</td>
                    <td>Todos</td>
                    <td>09/11/2022</td>
                    <td>Helena</td>
                    <td><a href="/secretaria/update-destaque"><FiEdit /></a></td>
                </tr>
            </tbody>
        </table>
    )
}