import style from './CardBook.module.css'

const CardBooks = ({titulo, autor, imagem})=> {
    return (
        <div>
            <h3>{titulo}</h3>
            <p>{autor}</p>
            <img src= {imagem} alt ={titulo} title={{titulo}}/>
        </div>
    )
}

export default CardBooks