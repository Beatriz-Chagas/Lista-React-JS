// Crie um componente que receba um array de objetos representando imagens, onde cada objeto tem uma url e um altText. Renderize essas imagens com o atributo alt dinâmico com base no valor de altText. 

function ImageList({prop}) {

    const images = [

        {
            url: 'https://i.pinimg.com/enabled_lo/564x/c4/b8/e6/c4b8e6d084715e4f7aed98f908da133e.jpg',
            altText: 'Conchas brancas com reflexos coloridos como o arco-íris'

        },
        {
            url: 'https://i.pinimg.com/enabled_lo/564x/c6/d1/98/c6d19835537a7b3d9e562906e4f901ea.jpg',
            altText: 'Hall de castelo ou catedral majoritariamente vermelho'
        },

    ];

    return (
        <div >
            {images.map((images) => (
                <img src={images.url} alt={images.altText} className="imagensURL"/>
            
            ))};
        </div>
    );
};
export default ImageList;

