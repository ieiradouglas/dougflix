import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Pagina404 = () => (<div>Erro 404</div>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro/video" element={<CadastroVideo/>}/>
        <Route path="/cadastro/categoria" element={<CadastroCategoria/>}/>
        <Route path="*" element={Pagina404()}/>
    </Routes>    
       
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
