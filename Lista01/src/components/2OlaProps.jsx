// 2) Passar uma Prop Simples: 
// Crie um componente que receba uma prop chamada nome e renderize a frase "Olá, [nome]!" onde [nome] é o valor da prop. 

function  Ola(prop) {
 return (
    <h2>Olá ,{prop.nome}</h2>
 )
};
 export default Ola;