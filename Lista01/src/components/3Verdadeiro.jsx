// 3) Renderizar Elementos Condicionalmente com If: 

// Crie um componente que receba uma prop chamada autenticado. Se for true, renderize "Bem-vindo, usuário!", senão não renderize nada. 

function Verdadeiro (prop) {
    let autenticado = true;

    if  (autenticado == true) {
    return (  
    <h2>{prop.autenticado}Bem-vindo, usuário!</h2> );
}};

export default Verdadeiro;