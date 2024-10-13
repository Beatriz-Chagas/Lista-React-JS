// 4) Renderizar Elementos com If-Else: 

// Crie um componente que receba uma prop chamada idade. Se idade for maior ou igual a 18, renderize "Você é adulto", senão renderize "Você é menor de idade". 
function Idades(prop) {
    
    let  idade = prop.idade;
    if (idade >= 18) {
        return(
            <p>Você é adulto</p>

        )
    } else {
        return(
            <p>Você é menor de idade</p>
        );
    }

};
export default Idades;