import axios from 'axios'
import type { Ifilmes } from '../Interfaces/Ifilmes';

export function CadastrarFilme(filme: Ifilmes) {

    alert("dados recebidos" + JSON.stringify(filme));

    axios.post("http://localhost:3000/filmes", filme)
        .then((response) => {
            console.log('Sucesso! Resposta do servidor:', response.data);
            alert('Produto cadastrado com sucesso!');
        }).catch((error) => {
            alert("erro ao cadastrar" + error);
        })
}