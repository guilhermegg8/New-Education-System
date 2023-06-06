import { FiEdit } from 'react-icons/fi'
import '../../Table.css'

export default function TableCurso() {
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
                    <th>Unidade</th>
                    <th>Turno</th>
                    <th>Coordenador</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>20001</td>
                    <td>DSM</td>
                    <td>Fatec Zona Leste</td>
                    <td>Manhã</td>
                    <td>Antônio</td>
                    <td><a href="/secretaria/update-curso"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>20002</td>
                    <td>RH</td>
                    <td>Fatec Zona Leste</td>
                    <td>Tarde</td>
                    <td>Paulo</td>
                    <td><a href="/secretaria/update-curso"><FiEdit /></a></td>
                </tr>
            </tbody>
        </table>
    )
}