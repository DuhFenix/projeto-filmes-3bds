import { Typography, Input, TextField, Button } from '@mui/material'
import '../App.css'
import './Cadastro.css'
import type { Ifilmes } from '../Interfaces/Ifilmes'
import { CadastrarFilme } from '../Services/FilmeService';

function Cadastro() {

    let filme: Ifilmes = {
        name: '',
        description: '',
        video: '',
        imagem: ''
    };

    function Cadastrar() {
        CadastrarFilme(filme);
    }

    return (
        <div id='principal' className='container ; divPrincipal'>
            <h1 className='txtcolor'>Cadastro Filme</h1>
            <div id='cadastro' className='divCadastro'>
                <div id='nome' className='inputs'>
                    <Typography className='txtcolor'>Nome</Typography>
                    <Input placeholder="Nome" className='myinput'
                        onChange={(e) => {
                            filme.name = e.target.value
                        }} />
                </div>
                <div id='descricao' className='inputs'>
                    <Typography className='txtcolor'>Descricao</Typography>
                    <TextField
                        multiline
                        minRows={10}
                        sx={{ width: 400 }}
                        className='myinput'
                        onChange={(e) => {
                            filme.description = e.target.value
                        }}
                    />
                </div>
                <div id='video' className='inputs'>
                    <Typography className='txtcolor'>Video</Typography>
                    <TextField
                        multiline
                        minRows={2}
                        sx={{ width: 400 }}
                        className='myinput'
                        onChange={(e) => {
                            filme.video = e.target.value
                        }}
                    />
                </div>
                <div id='imagem' className='inputs'>
                    <Typography className='txtcolor'>Imagem</Typography>
                    <Input placeholder="Imagem" className='myinput'
                        onChange={(e) => {
                            filme.imagem = e.target.value
                        }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button variant="contained" color="primary"
                        onClick={Cadastrar}>
                        Cadastrar
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Cadastro