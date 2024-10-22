// Crie um componente que renderize uma lista de tarefas a partir de um array, onde cada item tenha uma chave única (key), e mostre um botão "Remover" para remover o item da lista. 

import { useState } from "react";

function ListaChave(props) {

    const [tarefas, SetTarefas] = useState([
        { id: 1, nome: 'Tarefa 1' },
        { id: 2, nome: 'Tarefa 2' },
        { id: 3, nome: 'Tarefa 3' },
    ]);

const  removerTarefa = (id) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    SetTarefas(novasTarefas);
};

    return (
<>
<ul>
    {tarefas.map(tarefa => (
        <li key={tarefa.id}>
            {tarefa.nome}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </li>
        ))};
</ul>
</>
    );
};
export default ListaChave;
