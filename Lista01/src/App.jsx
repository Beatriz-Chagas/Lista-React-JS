import './App.css'
import Botoes from './components/10Botao'
import Saudacao from './components/1Saudacao'
import Ola from './components/2OlaProps'
import Verdadeiro from './components/3Verdadeiro'
import Idades from './components/4Idades'
import Estudantes from './components/5Estudante'
import Notas from './components/6Nota'
import Descontos from './components/7OperadorTernario'
import Frases from './components/8FrasesTernarias'
import Nivels from './components/9Niveis'

function App() {

  return (
    <>
      <Saudacao />
      <Ola nome = "Chagas" />
      <Verdadeiro/>
      <Idades idade = '18'/>
      <Estudantes/>
      <Notas nota='80'/>
      <Descontos desconto=''/>
      <Frases online = 'true'/>
      <Nivels  nivel = ''/>
      <Botoes botao = ''/>
    </>
  )
}

export default App
