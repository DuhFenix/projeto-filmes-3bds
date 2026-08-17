import { Lista } from '../../utils/Lista';
import './OpenFilmes.css'

function OpenFilmes() {

    const filmes = Lista;

    return (
        <div className="divFilmes">
            <h1>{filmes[0].name}</h1>
            <img className='myimg' src={filmes[0].imagem} />
            <label className='mydescription'>{filmes[0].description}</label>
            <div className="myvideo" dangerouslySetInnerHTML={{ __html: filmes[0].video }} />
        </div>
    )
}

export default OpenFilmes