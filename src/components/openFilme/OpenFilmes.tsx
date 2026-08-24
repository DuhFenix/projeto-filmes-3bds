import type { Ifilmes } from '../../Interfaces/Ifilmes';
import './OpenFilmes.css'
import { useLocation } from 'react-router'

function OpenFilmes() {
    const location = useLocation()
    const filme = location.state as Ifilmes | undefined

    console.log(filme);

    if (!filme) {
        return <div className="divFilmes">Filme não encontrado.</div>
    }

    return (
        <div className="divFilmes">
            <h1>{filme.name}</h1>
            <img className='myimg' src={filme.imagem} alt={filme.name} />
            <label className='mydescription'>{filme.description}</label>
            <div className="myvideo" dangerouslySetInnerHTML={{ __html: filme.video }} />
        </div>
    )
}

export default OpenFilmes