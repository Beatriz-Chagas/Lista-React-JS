import { useState } from 'react'
import './App.css'
import Listas from './components/TitulosLIstas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listas titulosL = "1) Renderizar um Texto Simples: " />
      <Listas titulosL = "2) Renderizar um Parágrafo: "/>
      <Listas titulosL = "3) Renderizar uma Lista Ordenada: "/>
      <Listas titulosL = "4) Renderizar uma Imagem:"/>
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
