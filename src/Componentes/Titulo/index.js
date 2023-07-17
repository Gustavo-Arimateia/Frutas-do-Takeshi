import './Titulo.css'

const Titulo = (props) => {

    return (
        <div className='titulo'>
            <h5>{props.text}</h5>
        </div>
    )
}

export default Titulo