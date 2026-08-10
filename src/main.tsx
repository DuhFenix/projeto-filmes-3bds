import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import Sobre from './pages/Sobre.tsx'
import Header from './components/Header/Header.tsx'
import Contato from './pages/Contato.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {path: "/sobre", element: <Sobre /> },
  {path: "/contato", element: <Contato />},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>,
)
