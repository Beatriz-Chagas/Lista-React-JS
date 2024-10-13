// 7) Usar o Operador Ternário: 

// Crie um componente que receba uma prop chamada temDesconto. Usando o operador ternário, renderize "Desconto Aplicado" se temDesconto for true, e "Sem Desconto" se for false. 

function Descontos (prop) {
    
    const temDesconto = prop.desconto;
    let descontos = (temDesconto == 'true')? "Desconto aplicado." : "Sem desconto."

    return(
        <h3>{descontos}</h3>
    );
};
export default  Descontos;
