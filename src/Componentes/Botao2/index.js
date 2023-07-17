import './Botao2.css'

const BotaoQuadrado = ({children,onClick}) => {
    return (
        <button className="botao2" onClick={onClick}>
            {children}
        </button>
    )
}

export default BotaoQuadrado