import { FiEdit } from 'react-icons/fi'
import '../../Table.css'

export default function TableAluno() {
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
        <table id="example" className="display">
            <thead className="first">
                <tr>
                    <th>Registro</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Turno</th>
                    <th>Semestre</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10001</td>
                    <td>Pedro Pessina</td>
                    <td>DSM</td>
                    <td>Manhã</td>
                    <td>2°</td>
                    <td><a href="/secretaria/update-aluno"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>10002</td>
                    <td>Gustavo Nascimento</td>
                    <td>DSM</td>
                    <td>Manhã</td>
                    <td>2°</td>
                    <td><a href="/secretaria/update-aluno"><FiEdit /></a></td>
                </tr>
            </tbody>
        </table>
    )
}