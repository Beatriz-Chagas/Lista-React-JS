// Crie um componente pai que passe uma propriedade (props) para um componente filho, e o componente filho deve renderizar essa propriedade no JSX. 

function Pai (props) {
  return(
    <h3>{props.mensagem}Mensagem teste do pai</h3>
  );
};

function Filho (){
  return(
    <Pai mensagem/>
  );
};
export default Filho;
