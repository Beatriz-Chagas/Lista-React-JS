//Crie um componente que receba uma prop booleana isVisible. Baseado no valor de isVisible, o componente deve renderizar um parágrafo apenas se isVisible for true. 

function Invisivel (prop) {
const isVisible = prop.paragrafo;

const mensagem = isVisible? <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo sequi quaerat animi temporibus libero? Molestiae quibusdam, autem laboriosam, excepturi pariatur nostrum voluptatum non impedit laborum placeat provident voluptatem accusantium.</p> : " "

return (
    <h3>{mensagem}</h3>
)
};
export default  Invisivel;
