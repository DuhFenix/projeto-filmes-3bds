import { Lista } from '../../utils/Lista';
import './ListaFilmes.css'

function ListaFilmes() {

    const filmes = Lista;

    return (
        <div className="divFilmes">
            <h1>{filmes[0].name}</h1>
            <img className='myimg' src={filmes[0].imagem} />
        </div>
    )
}

export default ListaFilmes