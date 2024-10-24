import './App.css'
import Listas from './components/TitulosLIstas'
import ListaDesordenada from './components/01_ListaMap'
import Filho from './components/02_ComponentePaiFlho'
import Invisivel from './components/03_Invisivel'
import Sapatos from './components/04_Tabela'
import Imagens from './components/05_Imagens'
import AlterarEstilo from './components/06_EstiloProp'
import ListaChave from './components/07_ListaChave'
import Card from './components/08_Children'
import FragmentosAninhados from './components/09_FragmentosAninhados'
import ImageList from './components/10_ObjetoImagem'

function App() {

  return (
    <>
     <Listas titulosL = "1) Renderizar Lista Dinâmica com Map: "/>
      <ListaDesordenada/>
      <Listas titulosL = "2) Renderizar Componentes com Props:"/>
      <Filho/>
      <Listas titulosL = "3) Renderizar Elementos Condicionalmente com Props: "/>
      <Invisivel paragrafo = {false}/>
      <Listas titulosL = "4) Renderizar uma Tabela: "/>
      <Sapatos/>
      <Listas titulosL = "5) Renderizar Imagens com Condição:"/>
      <Imagens/>
      <Listas titulosL = "6) Renderizar Estilos Dinamicamente: "/>
      <AlterarEstilo isHighlighted = {true}/>
      <Listas titulosL = "7) Renderizar uma Lista com Chave (key): "/>
      <ListaChave/>
      <Listas titulosL = "8) Renderizar Componente usando children: "/>
      <Card children=  {[1,2,3,4,5]}/>
      <Listas titulosL = "9) Renderizar com Fragmentos Aninhados: "/>
      <FragmentosAninhados/>
      <Listas titulosL = "10) Renderizar Imagens com Texto Alternativo Dinâmico: "/>
      <ImageList/>
    </>
  )
}

export default App
