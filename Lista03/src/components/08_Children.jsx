// Crie um componente Card que tenha um contorno e receba qualquer conteúdo passado como children, renderizando esse conteúdo dentro do Card. 

function  Card({ children }) {

    return (
        <div className="card">
            {children}
        </div>
    );
};
export  default Card;

