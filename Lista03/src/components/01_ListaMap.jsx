// Crie um componente que receba um array de nomes como propriedade e renderize cada nome em um item de lista (li) dentro de uma lista não ordenada (ul), usando o método map().

function Nomes(props){
    return(
        <li>Nomes aleatórios: {props.nome}</li>
    );
};

function ListaDesordenada() {

    const nomes = ["João", "Maria", "Pedro", "Ana"];

    return(
        <>
        <h2>Lista de nomes alétórios</h2>
        <ul>
            {nomes.map((nomes) => <Nomes nome ={nomes}/>)};
        </ul>
        </>
    );
};
export default ListaDesordenada;
