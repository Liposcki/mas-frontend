import {Container} from "./styles";

export function ActivyTable (){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento Frontend</td>
                        <td>8.97</td>
                        <td>30/10/2021</td>                        
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}