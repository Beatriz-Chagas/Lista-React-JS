// Crie um componente que receba um array de URLs de imagens. O componente deve renderizar todas as imagens cujas URLs não estejam vazias. 

function Imagens() {

    const imagens = [
       " https://i.pinimg.com/enabled_lo/564x/83/0a/bb/830abb261abed9cce6e255c9d4a0a99d.jpg",
        "https://i.pinimg.com/564x/f7/a7/cd/f7a7cdf92c3846d9ad5b234182c67066.jpg"
        
    ];

    return(
        <div>
             {imagens.map((imagens) => (
            <img src={imagens} alt="Imagem aleatórias de árvores com brilhos azuis e dois cachorros cinzas" className="imagensURL"/>
          ))}
        </div>
    )
};
export  default Imagens;
