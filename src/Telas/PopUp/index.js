import React from 'react';
import './Menu.css'

const Popup = ({onClose, onEditar, onExcluir }) => {
    return (
        <div className="popup">
             <div className="popup-fundo" onClick={onClose}></div>
            <div className="popup-content">
                <button onClick={onEditar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1897 2.68933C19.471 2.40824 19.8523 2.25034 20.25 2.25034C20.6477 2.25034 21.029 2.40824 21.3103 2.68933L20.7801 3.21987L21.3107 2.68968C21.5918 2.97095 21.7497 3.35233 21.7497 3.74999C21.7497 4.14764 21.5918 4.52902 21.3107 4.8103L21.3106 4.81036L20.2503 5.87114C20.1096 6.01186 19.9188 6.09093 19.7198 6.09093C19.5209 6.09093 19.3301 6.01186 19.1894 5.87114L18.1291 4.81036C17.8363 4.51744 17.8364 4.04266 18.1292 3.74981L19.1895 2.6895L19.7198 3.21979L19.1897 2.68933ZM17.0682 5.12108C17.2672 5.12097 17.4582 5.2 17.5989 5.34075L18.6592 6.40106C18.8 6.54182 18.879 6.73276 18.8789 6.93182C18.8788 7.13088 18.7996 7.32173 18.6586 7.46233L5.63863 20.4528C5.58336 20.5079 5.51982 20.5541 5.4503 20.5897L3.34139 21.6678C3.05177 21.8158 2.69971 21.7603 2.4697 21.5303C2.23968 21.3003 2.18414 20.9483 2.33218 20.6587L3.4103 18.5493C3.44585 18.4797 3.49204 18.4162 3.5472 18.3609L16.5377 5.34134C16.6783 5.20043 16.8691 5.12119 17.0682 5.12108Z" fill="#212324" />
                    </svg>
                    Editar Fruta
                </button>
                <button onClick={onExcluir}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.25 5.25L6.1875 20.25C6.23203 21.1167 6.8625 21.75 7.6875 21.75H16.3125C17.1408 21.75 17.7595 21.1167 17.8125 20.25L18.75 5.25" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.75 5.25H20.25" stroke="#212324" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M9.00001 5.24991V3.37491C8.99958 3.22705 9.02838 3.08057 9.08477 2.94388C9.14115 2.8072 9.224 2.683 9.32855 2.57845C9.4331 2.4739 9.5573 2.39105 9.69398 2.33467C9.83067 2.27828 9.97716 2.24948 10.125 2.24991H13.875C14.0229 2.24948 14.1694 2.27828 14.3061 2.33467C14.4427 2.39105 14.5669 2.4739 14.6715 2.57845C14.776 2.683 14.8589 2.8072 14.9153 2.94388C14.9717 3.08057 15.0005 3.22705 15 3.37491V5.24991" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 8.25V18.75" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.625 8.25L9 18.75" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.375 8.25L15 18.75" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Excluir Fruta
                </button>
            </div>
        </div>

    );
};

export default Popup;
