import { FiEdit } from 'react-icons/fi'
import '../../Table.css'

export default function TableFuncionario() {
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
        <table id="example" className="display nowrap">
            <thead>
                <tr>
                    <th>Registro</th>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Período</th>
                    <th>Unidade</th>
                    <th>Remuneração</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>00001</td>
                    <td>Pedro Pessina</td>
                    <td>Professor</td>
                    <td>Manhã</td>
                    <td>Fatec Zona Leste</td>
                    <td>R$ 12.000,00</td>
                    <td><a href="/secretaria/update-funcionario"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>00002</td>
                    <td>Gustavo Nascimento</td>
                    <td>Diretor</td>
                    <td>Integral</td>
                    <td>Fatec Zona Leste</td>
                    <td>R$ 12.000,00</td>
                    <td><a href="/secretaria/update-funcionario"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>00003</td>
                    <td>Mateus Santana</td>
                    <td>Estagiário</td>
                    <td>Tarde</td>
                    <td>Fatec Zona Leste</td>
                    <td>R$ 0</td>
                    <td><a href="/secretaria/update-funcionario"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>00004</td>
                    <td>Guilherme Gonçalves</td>
                    <td>Secretário</td>
                    <td>Noite</td>
                    <td>Fatec Zona Leste</td>
                    <td>R$ 7.000,00</td>
                    <td><a href="/secretaria/update-funcionario"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>00005</td>
                    <td>Vicenzzo Toth</td>
                    <td>Coordenador</td>
                    <td>Manhã e tarde</td>
                    <td>Fatec Zona Leste</td>
                    <td>R$ 9.000,00</td>
                    <td><a href="/secretaria/update-funcionario"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>00006</td>
                    <td>Priscila Ribeiro</td>
                    <td>Secretária</td>
                    <td>Tarde</td>
                    <td>Fatec Zona Leste</td>
                    <td>R$ 7.000,00</td>
                    <td><a href="/secretaria/update-funcionario"><FiEdit /></a></td>
                </tr>
                <tr>
                    <td>00007</td>
                    <td>Beatriz Chagas</td>
                    <td>Bibliotecária</td>
                    <td>Tarde</td>
                    <td>Etec Zona Leste</td>
                    <td>R$ 4.000,00</td>
                    <td><a href="/secretaria/update-funcionario"><FiEdit /></a></td>
                </tr>
            </tbody>
        </table>
    )
}