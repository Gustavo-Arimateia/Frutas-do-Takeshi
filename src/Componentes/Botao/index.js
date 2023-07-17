import './Botao.css'


const Botao = ({ children, onClick }) => {

    return (
        <button className="botao" onClick={onClick}>
            <div className="botao-content">
            {children}
            </div>
        </button>
    )
}

export default Botao