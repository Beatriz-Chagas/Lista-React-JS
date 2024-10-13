// 8) Renderizar Diferentes Frases com If Ternário: 

// Crie um componente que receba uma prop chamada online. Use o operador ternário para renderizar "Usuário online" se for true, e "Usuário offline" se for false. 

function Frases (prop) {
    const online = prop.online
    let frase = (online == 'true')? 'O usuário está online.' : 'O usuário está offline.'

    return <h3>{frase}</h3>
};

export default  Frases;
