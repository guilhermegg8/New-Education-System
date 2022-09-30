import { FiEdit } from 'react-icons/fi'
import '../../Table.css'

export default function TableDisciplina() {
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
                    <th>Registro</th>
                    <th>Nome</th>
                    <th>Unidade</th>
                    <th>Carga Horária</th>
                    <th>Professor</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10001</td>
                    <td>Desenvolvimento Web II</td>
                    <td>Fatec Zona Leste</td>
                    <td>160 horas</td>
                    <td>Ícaro de Paula</td>
                    <td><a href="/secretaria/update-disciplina"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>10002</td>
                    <td>Engenharia de Software II</td>
                    <td>Fatec Zona Leste</td>
                    <td>160 Horas</td>
                    <td>Wilson Vendramel</td>
                    <td><a href="/secretaria/update-disciplina"><FiEdit /></a></td>
                </tr>
            </tbody>
        </table>
    )
}