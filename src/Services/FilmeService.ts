import axios from 'axios'
import type { Ifilmes } from '../Interfaces/Ifilmes';
import type { IResponse } from '../Interfaces/Iresponse';

export function CadastrarFilme(filme: Ifilmes) {
    // Passamos <IResponse> para o axios saber o formato do retorno
    axios.post<IResponse>("http://localhost:3000/filmes", filme)
        .then((response) => {
            // 1. Se der sucesso, mostra a mensagem da interface
            alert(response.data.mensagem);
        })
        .catch((error) => {
            // 2. Se der erro (como o 400), capturamos a resposta do back-end aqui
            if (error.response && error.response.data) {
                // Como o back-end envia a estrutura IResponse, pegamos o .mensagem
                alert(error.response.data.mensagem);
            } else {
                alert("Erro crítico de conexão com o servidor.");
            }
        })
}

export function ListarFilmes() {
    return axios.get<IResponse>("http://localhost:3000/filmes")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            if (error.response && error.response.data) {
                alert(error.response.data.mensagem);
            } else {
                alert("Erro crítico de conexão com o servidor.");
            }
        })
}

export function deleteFilme(id: number) {
    return axios.delete<IResponse>("http://localhost:3000/filmes", { data: { id } })
        .then((response) => {
            return response.data.mensagem
        })
        .catch((error) => {
            if (error.response && error.response.data) {
                alert(error.response.data.mensagem);
            } else {
                alert("Erro crítico de conexão com o servidor.");
            }
        })
}