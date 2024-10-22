// Crie um componente que use fragmentos para renderizar múltiplos elementos, incluindo um título, uma lista de itens e um parágrafo, sem criar elementos HTML desnecessários. 
  
function FragmentosAninhados() {

    const elementos  = [ "1º elemento", "2º elemento", "3º elemento", "4º elemento", "5º elemento"];

    return(

        <>
        
        <h3>Titulo da lista</h3>
        <ul>
            {elementos.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In doloremque, rem necessitatibus eveniet expedita labore harum ipsum sapiente corporis sit saepe? Consequuntur deserunt voluptatum reprehenderit quibusdam est nam itaque a.</p>
        </>
    );
};
export default FragmentosAninhados;

