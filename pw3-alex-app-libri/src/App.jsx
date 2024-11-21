import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'
import DetailBook from './components/pages/DetailBook'
import DeleteBook from './components/pages/DeleteBook'
import UpdateBook from './components/pages/UpdateBooks'


function App() {

  return (
    <>
      {/* estrutura de navegaçao */}
      <BrowserRouter>

        <Container>

          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route path='/' element={<Home />} />
              <Route path='/listBooks' element={<ListBooks />} />
              <Route path='/createBook' element={<CreateBooks />} />
              <Route path='/DetailBook/:cod_livro' element={<DetailBook />} />
              <Route path="/DeleteBook/:cod_livro" element={<DeleteBook />} />
              <Route path="/UpdateBook/:cod_livro" element={<UpdateBook />} />
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>



    </>
  )
}

export default App
