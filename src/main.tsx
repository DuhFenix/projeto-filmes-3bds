import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Header from './components/Header/Header.tsx'
import Contato from './pages/Contato.tsx'
import OpenFilmes from './components/openFilme/OpenFilmes.tsx'
import Cadastro from './pages/Cadastro.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {path: "/cadastro", element: <Cadastro /> },
  {path: "/contato", element: <Contato />},
  {path: "filme", element: <OpenFilmes/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>,
)
