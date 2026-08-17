import { Button } from '@mui/material';
import { Lista } from '../../utils/Lista';
import './ListaFilmes.css'

function ListaFilmes() {

    const filmes = Lista;

    return (
        <>
            {filmes.map((filme, index) => (
                <div className="divFilmes" key={index}>
                    <h1>{filme.name}</h1>
                    <img className='myimg' src={filme.imagem} alt={filme.name} />
                    <Button style={{ marginTop: 20 }} variant="contained">Acessar</Button>
                </div>
            ))}
        </>
    )
}

export default ListaFilmes