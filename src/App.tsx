import './App.css'
import ListaFilmes from './components/ListaFilmes/ListaFilmes'

function App() {

  return (
    <div className='container'>
      <div>
        <h1>Lista de filmes</h1>
      </div>
      <div>
        <ListaFilmes />
      </div>
    </div>
  )
}

export default App
