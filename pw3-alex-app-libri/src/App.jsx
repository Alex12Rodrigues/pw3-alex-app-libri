/* Importa o CSS*/
import './App.css'

/* Importa o componente de card de livro*/
import CardBooks from './components/CardBooks'

/* Importa o arquivo da imagem da capa do livro*/
import capalivro from './assets/livros/cavernas_aco.jpg'


function App() {

  return (
    <>
    <CardBooks 
    titulo = 'Naruto Uzumaki'
    autor = 'Minato Namikaze'
    imagem = {capalivro}
    />
    
    </>
  )
}

export default App
