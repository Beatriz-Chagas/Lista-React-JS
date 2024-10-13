// 5) Renderizar com If-Else Simples: 

// Crie um componente que receba uma prop chamada estudante. Se for true, renderize "Você é um estudante", senão renderize "Você não é um estudante".

function Estudantes(prop) {
    let estudante = true;

    if  (estudante == true) {
        return <p>{prop.estudante} Você é um estudante </p>;
    } else {
        return <p>{prop.estudante} Você não é um estudante </p>;
    };

};

export default  Estudantes;
