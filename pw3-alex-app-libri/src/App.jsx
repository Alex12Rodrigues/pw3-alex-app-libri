/* Importa os componentes de navegação da aplicação*/
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Importa o CSS*/
import './App.css'

/* Importa o componente de container*/
import Container from './components/layout/Container'

/*Importa o componente de menu*/
import NavBar from './components/layout/NavBar'

import Home from './components/pages/Home'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'


function App() {

  return (
    <>

      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element={<NavBar />}>
              <Route path='/' element={<Home />} />
              <Route path='/ListBooks' element={<ListBooks />} />
              <Route path='/CreateBooks' element={<CreateBooks />} />

            </Route>

          </Routes>


        </Container>


      </BrowserRouter>
    </>
  )
}

export default App
