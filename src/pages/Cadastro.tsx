import { Typography, Input, TextField } from '@mui/material'
import '../App.css'
import './Cadastro.css'

function Cadastro() {
    return (
        <div id='principal' className='container ; divPrincipal'>
            <h1 className='txtcolor'>Cadastro Filme</h1>
            <div id='cadastro' className='divCadastro'>
                <div id='nome' className='inputs'>
                    <Typography className='txtcolor'>Nome</Typography>
                    <Input placeholder="Nome" className='myinput' />
                </div>
                <div id='descricao' className='inputs'>
                    <Typography className='txtcolor'>Descricao</Typography>
                    <TextField
                        multiline
                        minRows={10}
                        sx={{ width: 400 }}
                        className='myinput'
                    />
                </div>
                 <div id='video' className='inputs'>
                    <Typography className='txtcolor'>Video</Typography>
                    <TextField
                        multiline
                        minRows={2}
                        sx={{ width: 400 }}
                        className='myinput'
                    />
                </div>
            </div>
        </div>
    )
}
export default Cadastro