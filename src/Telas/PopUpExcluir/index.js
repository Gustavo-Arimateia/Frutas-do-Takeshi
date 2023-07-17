import React from 'react';
import Titulo from '../../Componentes/Titulo';
import './PopUpExcluir.css';

const PopupExcluir = ({ onClose, onConfirm }) => {
  return (
    <div className="popupexcluir">
      <div className="popupexcluir-fundo" onClick={onClose}></div>
      <div className="popupexcluir-conteudo">
        
        <Titulo className='tituloPopUp'text="Excluir Fruta" />
        <p className='text'>
          Tem certeza que quer excluir essa fruta?<br />
          Você perderá todas as informações cadastradas sobre ela.
        </p>
        <div className="botao-container">
        <button onClick={onClose} className='nao'>Não</button>
        <button onClick={onConfirm} className='sim'>Sim, Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default PopupExcluir;
