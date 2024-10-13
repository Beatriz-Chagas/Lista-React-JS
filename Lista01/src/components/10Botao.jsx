// 10) Renderizar um Botão com Condição: 
// Crie um componente que receba uma prop chamada logado. Se for true, renderize um botão "Sair". Se for false, renderize um botão "Entrar". 

function Botoes(prop) {
    const testeVerdade = prop.botao;
    let botao = (testeVerdade == 'true')?  "Sair" : "Entrar";

    return(
        <input type="submit" value={botao} id="" />
    );

};
export default  Botoes;
