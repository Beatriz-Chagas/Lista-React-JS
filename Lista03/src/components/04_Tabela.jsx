// Crie um componente que receba um array de objetos como propriedade e renderize esses objetos em uma tabela HTML, com colunas para id, modelo e tamanho. 

function ListaSapatos(prop) {
    return (
        <>
            <tr style={{ border: '1px solid #000' }}>
                <th style={{ border: '1px solid #000' }}>{prop.modelo}</th>
                <th style={{ border: '1px solid #000' }}>{prop.tamanho}</th>
                <th style={{ border: '1px solid #000' }}>{prop.cor}</th>
            </tr>
        </>
    )
};

function Sapatos() {
    const atributos = [
        { modelo: "Anabela", tamanho: 39, cor:"Preto" },
        { modelo: "Scarpin", tamanho: 38 , cor:"Branco" },
        { modelo: "Coturno", tamanho: 42 , cor:"Marrom" },
        { modelo: "Mocassim", tamanho: 40, cor:"Cinza" },

    ];

    return (
        <>
            <table style={{ border: '1px solid #000' }}>
                <tr>
                    <th>Modelo</th>
                    <th>Tamanho</th>
                    <th>Cor</th>
                </tr>
                {atributos.map((atributos) => (
                    <ListaSapatos modelo={atributos.modelo} tamanho={atributos.tamanho} cor={atributos.cor}/>
                ))}
            </table>
        </>
    );
}

export default Sapatos;