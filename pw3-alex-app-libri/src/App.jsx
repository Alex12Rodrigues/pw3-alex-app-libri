import './App.css'
import CardBooks from './components/CardBooks'

function App() {

  return (
    <>
    <CardBooks 
    titulo = 'Naruto Uzumaki'
    autor = 'Minato Namikaze'/>
    
    <CardBooks 
    titulo = 'Goku'
    autor = 'Bardock'/>
    
    <CardBooks 
    titulo = 'Midoria Izuku'
    autor = 'All Might'/>
    </>
  )
}

export default App
