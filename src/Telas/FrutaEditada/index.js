import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Titulo from '../../Componentes/Titulo';
import Label from '../../Componentes/CampoTexto';
import Botao from '../../Componentes/Botao';

const EditarFruta = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const frutaSelecionada = location.state;

  const [frutaEditada, setFrutaEditada] = useState(frutaSelecionada);

  const handleInputChange = (value, labelName) => {
    setFrutaEditada(prevState => ({
      ...prevState,
      [labelName]: value
    }));
  };

  const handleAtualizarFruta = () => {
    const { id } = frutaEditada;

    const frutasCadastradas = JSON.parse(localStorage.getItem('frutasCadastradasTeste3')) || [];

    const novaListaFrutas = frutasCadastradas.map(fruta => {
      if (fruta.id === id) {
        return {
          ...fruta,
          Nome: frutaEditada.Nome,
          Preco: frutaEditada.Preco,
          Estoque: frutaEditada.Estoque
        };
      }
      return fruta;
    });

    localStorage.setItem('frutasCadastradasTeste3', JSON.stringify(novaListaFrutas));
    navigate('/');
  };

  const TelaPrincipal = () => {
    navigate('/')
  }

  const iconMaça = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.5 6.00004C14.9878 5.86457 13.5 6.75004 12 6.75004C10.5 6.75004 9.01172 5.85942 7.5 6.00004C4.5 6.28129 3 9.00004 3 13.5C3 17.25 6 22.5 8.2125 22.5C10.425 22.5 10.6472 21.375 12 21.375C13.3528 21.375 13.5745 22.5 15.7875 22.5C18.0005 22.5 21 17.25 21 13.5C21 9.00004 19.6406 6.28129 16.5 6.00004Z" stroke="#212324" stroke-miterlimit="10" />
    <path d="M15.1837 3.89679C14.1994 4.88117 13.0434 5.16242 12.4265 5.24633C12.3701 5.25446 12.3126 5.24962 12.2584 5.2322C12.2041 5.21478 12.1546 5.18522 12.1134 5.14577C12.0723 5.10632 12.0407 5.05802 12.0211 5.00454C12.0014 4.95106 11.9942 4.8938 12 4.83711C12.1112 3.78268 12.5853 2.79963 13.3411 2.05601C14.3723 1.02476 15.4973 0.795076 16.0936 0.750545C16.1493 0.745465 16.2053 0.752893 16.2578 0.772285C16.3102 0.791677 16.3576 0.822542 16.3966 0.862623C16.4355 0.902704 16.465 0.950986 16.4829 1.00394C16.5008 1.05689 16.5067 1.11317 16.5 1.16867C16.3823 2.2007 15.9183 3.16239 15.1837 3.89679Z" fill="#212324" />
    <path d="M10.125 16.5C10.7463 16.5 11.25 15.4926 11.25 14.25C11.25 13.0074 10.7463 12 10.125 12C9.50368 12 9 13.0074 9 14.25C9 15.4926 9.50368 16.5 10.125 16.5Z" fill="#212324" />
    <path d="M13.875 16.5C14.4963 16.5 15 15.4926 15 14.25C15 13.0074 14.4963 12 13.875 12C13.2537 12 12.75 13.0074 12.75 14.25C12.75 15.4926 13.2537 16.5 13.875 16.5Z" fill="#212324" />
  </svg>

  const iconDinheiro = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2.25 15.75L21.75 15.75C22.1642 15.75 22.5 15.4142 22.5 15V4.5C22.5 4.08579 22.1642 3.75 21.75 3.75L2.25 3.75C1.83579 3.75 1.5 4.08579 1.5 4.5V15C1.5 15.4142 1.83579 15.75 2.25 15.75Z" stroke="#212324" stroke-linejoin="round" />
    <path d="M3 18H21" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.5 20.25H19.5" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 13.5C14.0711 13.5 15.75 11.8211 15.75 9.75C15.75 7.67893 14.0711 6 12 6C9.92893 6 8.25 7.67893 8.25 9.75C8.25 11.8211 9.92893 13.5 12 13.5Z" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22.5 7.5C21.5054 7.5 20.5516 7.10491 19.8483 6.40165C19.1451 5.69839 18.75 4.74456 18.75 3.75" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M1.5 7.5C1.99246 7.5 2.48009 7.403 2.93506 7.21455C3.39003 7.02609 3.80343 6.74987 4.15165 6.40165C4.49987 6.05343 4.77609 5.64003 4.96455 5.18506C5.153 4.73009 5.25 4.24246 5.25 3.75" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M22.5 12C21.5054 12 20.5516 12.3951 19.8483 13.0983C19.1451 13.8016 18.75 14.7554 18.75 15.75" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M1.5 12C1.99246 12 2.48009 12.097 2.93506 12.2855C3.39003 12.4739 3.80343 12.7501 4.15165 13.0983C4.49987 13.4466 4.77609 13.86 4.96455 14.3149C5.153 14.7699 5.25 15.2575 5.25 15.75" stroke="#212324" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  const iconMoedas = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 9.75C16.9706 9.75 21 8.07107 21 6C21 3.92893 16.9706 2.25 12 2.25C7.02944 2.25 3 3.92893 3 6C3 8.07107 7.02944 9.75 12 9.75Z" stroke="#212324" stroke-miterlimit="10" stroke-linecap="round" />
    <path d="M21 10.0312C21 12.1022 16.9688 13.7812 12 13.7812C7.03125 13.7812 3 12.1022 3 10.0312" stroke="#212324" stroke-miterlimit="10" stroke-linecap="round" />
    <path d="M21 14.0625C21 16.1334 16.9688 17.8125 12 17.8125C7.03125 17.8125 3 16.1334 3 14.0625" stroke="#212324" stroke-miterlimit="10" stroke-linecap="round" />
    <path d="M3 5.96414V18.0354C3 20.0866 7.03125 21.7498 12 21.7498C16.9688 21.7498 21 20.0866 21 18.0354V5.96414" stroke="#212324" stroke-miterlimit="10" stroke-linecap="round" />
  </svg>

  return (
    <>

      <div className="header">
        <Titulo text='Editar Fruta' />

        <svg xmlns="http://www.w3.org/2000/svg" onClick={TelaPrincipal} width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M18.1213 16L24.0588 10.0625C24.3405 9.7812 24.4991 9.39948 24.4994 9.00132C24.4998 8.60316 24.3419 8.22116 24.0606 7.93937C23.7793 7.65758 23.3976 7.49907 22.9995 7.49872C22.6013 7.49837 22.2193 7.6562 21.9375 7.93749L16 13.875L10.0625 7.93749C9.78072 7.6557 9.39852 7.49739 9.00001 7.49739C8.60149 7.49739 8.2193 7.6557 7.93751 7.93749C7.65572 8.21929 7.49741 8.60148 7.49741 8.99999C7.49741 9.39851 7.65572 9.7807 7.93751 10.0625L13.875 16L7.93751 21.9375C7.65572 22.2193 7.49741 22.6015 7.49741 23C7.49741 23.3985 7.65572 23.7807 7.93751 24.0625C8.2193 24.3443 8.60149 24.5026 9.00001 24.5026C9.39852 24.5026 9.78072 24.3443 10.0625 24.0625L16 18.125L21.9375 24.0625C22.2193 24.3443 22.6015 24.5026 23 24.5026C23.3985 24.5026 23.7807 24.3443 24.0625 24.0625C24.3443 23.7807 24.5026 23.3985 24.5026 23C24.5026 22.6015 24.3443 22.2193 24.0625 21.9375L18.1213 16Z" fill="#212324" />
        </svg>
      </div>
      <div className="Label">
        <Label typeValor='text' icon={iconMaça} onChange={value => handleInputChange(value, 'Nome')}>
          Nome da Fruta
        </Label>
      </div>
      <div className="Label">
        <Label typeValor='number' icon={iconDinheiro} onChange={value => handleInputChange(value, 'Preco')}>
          Preço do Kilo
        </Label>
      </div>
      <div className="Label">
        <Label typeValor='number' icon={iconMoedas} onChange={value => handleInputChange(value, 'Estoque')}>
          Quantidade no Estoque
        </Label>
      </div>
      <div className="Botao">
        <Botao onClick={handleAtualizarFruta}>
          Atualizar Fruta
        </Botao>
      </div>
    </>
  );
};

export default EditarFruta;
