import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Rotas from './Routes/Routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Rotas/>
      </BrowserRouter>

    </div>
  );
}

export default App;
