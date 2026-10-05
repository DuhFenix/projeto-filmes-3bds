import axios from 'axios'
import type { Ifilmes } from '../Interfaces/Ifilmes';

export function CadastrarFilme(filme: Ifilmes) {

    axios.post("http://localhost:3000/filmes", filme)
        .then((response) => {

            if (response.data.erro) {
                alert(response.data.erro)
            }
            else {
                console.log('Sucesso! Resposta do servidor:', response.data);
                alert(response.data.mensagem);
            }
        })
}