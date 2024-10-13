// 9) Renderizar Condicionalmente com Multiplos If Ternários: 
// Crie um componente que receba uma prop chamada nivel. Se nivel for igual a "iniciante", renderize "Bem-vindo, iniciante!". 
// Se for "intermediário", renderize "Você está progredindo!". Se for "avançado", renderize "Parabéns, especialista!". 

function  Nivels(prop) {
    const nivel = prop.nivel;
    let  mensagem = (nivel =='iniciante') ? "Bem-vindo, iniciante!" :(nivel =='intermediario') ? "Você está progredindo!": (nivel =='avançado') ? "Parabéns, especialista!": "Nível de aprendizado não detectado.";

    return(<h2>{mensagem}</h2>);
};
export default  Nivels;

