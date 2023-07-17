import React from 'react'
import './CampoTexto.css'


const Label = ({onChange, children, typeValor, icon}) => {

    const placeholderModificada = `${children}` 
   
    const aoDigitado = (evento) => {
      const {value} = evento.target
      onChange(value)
    }

    return (
      <div className='label'>
        {icon}
        <input type={typeValor} required onChange={aoDigitado} placeholder={placeholderModificada} className='label2'/>
      </div>
       
    )
}

export default Label