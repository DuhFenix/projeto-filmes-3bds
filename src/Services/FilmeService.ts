import axios from 'axios'
import type { Ifilmes } from '../Interfaces/Ifilmes';
import type { IResponse } from '../Interfaces/Iresponse';

export function CadastrarFilme(filme: Ifilmes) {
    axios.post<IResponse>("http://localhost:3000/filmes", filme)
        .then((response) => {
            alert(response.data.mensagem);
        })
        .catch((error) => {
            if (error.response && error.response.data) {
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