// Crie um componente que, baseado em uma variável booleana, renderize "Bom dia" se for true e "Boa noite" se for false.   

function Condicao () {
    const vareadora  = false;

    let mensagem = (vareadora == true)  ? "Bom dia" : "Boa noite";

    return (
    <h3>{mensagem}</h3>
    );
};
export  default Condicao;
