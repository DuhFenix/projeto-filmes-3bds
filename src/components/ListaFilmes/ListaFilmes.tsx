import { Button } from '@mui/material';
import './ListaFilmes.css'
import type { Ifilmes } from '../../Interfaces/Ifilmes';
import { useNavigate } from 'react-router';
import { deleteFilme, ListarFilmes } from '../../Services/FilmeService';
import { useEffect, useState } from 'react';

function ListaFilmes() {

    const navigate = useNavigate();
    const [filmes, setFilmes] = useState<Ifilmes[]>([]);

    function NavegarFilme(filme: Ifilmes) {
        navigate('/filme', { state: filme })
    }

    useEffect(() => {
        ListarFilmes().then(response => {
            setFilmes(response.dados as Ifilmes[]);
        });
    }, [])

    function DeletarFilme(id: number) {

        if (window.confirm("Deseja excluir o filme")) {
            deleteFilme(id).then(response => {
                alert(response);
                window.location.reload();
            });
        }
    }

    return (
        <>
            <h1 style={{ color: "red", fontSize: 80 }}>Projeto Filmes 🎬</h1>
            {filmes.map((filme, index) => (
                <div className="divFilmes" key={index}>
                    <h1 style={{ color: "red" }}>{filme.name}</h1>
                    <img className='myimg' src={filme.imagem} alt={filme.name} />
                    <Button onClick={() => { NavegarFilme(filme) }} style={{ marginTop: 20, color: "red", borderColor: "red" }} variant="outlined">Acessar</Button>
                    <Button onClick={() => { DeletarFilme(filme.id || 0) }} style={{ marginTop: 20, color: "red", borderColor: "red" }} variant="outlined">Deletar</Button>
                </div>
            ))}
        </>
    )
}

export default ListaFilmes