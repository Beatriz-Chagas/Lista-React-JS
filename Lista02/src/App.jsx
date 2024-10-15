import { useState } from 'react'
import './App.css'
import Listas from './components/TitulosLIstas'
import Texto from './components/1_TextoSimples'
import Paragrafo from './components/2_Paragrafo'
import ListaOrdenada from './components/3_Lista_Ordenada'
import ImagemURL from './components/4_ImagemURL'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listas titulosL = "1) Renderizar um Texto Simples: "/>
      <Texto/>
      <Listas titulosL = "2) Renderizar um Parágrafo: "/>
      <Paragrafo/>
      <Listas titulosL = "3) Renderizar uma Lista Ordenada: "/>
      <ListaOrdenada/>
      <Listas titulosL = "4) Renderizar uma Imagem:"/>
      <ImagemURL/>
      <Listas titulosL = "5) Renderizar um Botão: "/>
      <Listas titulosL = "6) Renderizar um Link:"/>
      <Listas titulosL = "7) Renderizar um Título e Subtítulo:"/>
      <Listas titulosL = "8) Renderizar Conteúdo Condicional: "/>
      <Listas titulosL = "9) Renderizar uma Div com Estilo:"/>
      <Listas titulosL = "10) Renderizar Vários Elementos com Fragmentos:"/>

    </>
  )
}

export default App
