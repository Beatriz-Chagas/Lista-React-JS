import { useState } from 'react'
import './App.css'
import Listas from './components/TitulosLIstas'
import ListaDesordenada from './components/01_ListaMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Listas titulosL = "1) Renderizar Lista Dinâmica com Map: "/>
      <ListaDesordenada/>
      <Listas titulosL = "2) Renderizar Componentes com Props:"/>
      {/* <Paragrafo/> */}
      <Listas titulosL = "3) Renderizar Elementos Condicionalmente com Props: "/>
      {/* <ListaOrdenada/> */}
      <Listas titulosL = "4) Renderizar uma Tabela: "/>
      {/* <ImagemURL/> */}
      <Listas titulosL = "5) Renderizar Imagens com Condição:"/>
      {/* <Botao/> */}
      <Listas titulosL = "6) Renderizar Estilos Dinamicamente: "/>
      {/* <Link/> */}
      <Listas titulosL = "7) Renderizar uma Lista com Chave (key): "/>
      {/* <TituloSbtitulo/> */}
      <Listas titulosL = "8) Renderizar Componente usando children: "/>
      {/* <Condicao/> */}
      <Listas titulosL = "9) Renderizar com Fragmentos Aninhados: "/>
      {/* <Estilo/> */}
      <Listas titulosL = "10) Renderizar Imagens com Texto Alternativo Dinâmico: "/>
      {/* <Fragmentos/> */}
    </>
  )
}

export default App
