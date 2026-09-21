import { Button } from '@mui/material';
import { Lista } from '../../utils/Lista';
import './ListaFilmes.css'
import type { Ifilmes } from '../../Interfaces/Ifilmes';
import { useNavigate } from 'react-router';

function ListaFilmes() {

    const navigate = useNavigate();

    function NavegarFilme(filme: Ifilmes) {
        navigate('/filme', { state: filme })
    }

    const filmes = Lista as Ifilmes[];

    return (
        <>
            <h1 style={{ color: "red", fontSize: 80 }}>Projeto Filmes 🎬</h1>
            {filmes.map((filme, index) => (
                <div className="divFilmes" key={index}>
                    <h1 style={{color:"red"}}>{filme.name}</h1>
                    <img className='myimg' src={filme.imagem} alt={filme.name} />
                    <Button onClick={() => { NavegarFilme(filme) }} style={{ marginTop: 20  , color:"red" , borderColor:"red"}} variant="outlined">Acessar</Button>
                </div>
            ))}
        </>
    )
}

export default ListaFilmes