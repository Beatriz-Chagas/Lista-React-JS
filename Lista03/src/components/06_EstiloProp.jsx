// Crie um componente que altere dinamicamente o estilo de um parágrafo com base no valor de uma prop, como mudar a cor do texto se a prop isHighlighted for true. 

function AlterarEstilo (props) {

    const estilos = props.isHighlighted;
    const resultado = estilos ? (
        <span style={{ backgroundColor: "Green", color: "#000" }}>Verdadeiro</span>
    ) : (
        <span style={{ backgroundColor: "red", color: "#000" }}>Falso</span>
    );
  
    return (
         resultado 
    );


};
export default AlterarEstilo;
