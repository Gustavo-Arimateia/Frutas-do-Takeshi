import React from "react";
import {Routes, Route} from 'react-router-dom'
import TelaInicial from "../Telas/TelaInicial";
import CadastrarFruta from "../Telas/CadastrarFruta";
import FrutaCadastrada from "../Telas/FrutaCadastrada";
import EditarFruta from "../Telas/FrutaEditada";


 const Rotas = () => {

    return (
    <Routes>
        <Route path='/' element={<TelaInicial/>} />

        <Route path='/cadastrar' element={<CadastrarFruta/>} />

        <Route path="/FrutaCadastrada" element={<FrutaCadastrada/>}/>

        <Route path="/EditarFruta" element={<EditarFruta/>}/>
    </Routes>
    )
}

export default Rotas