import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import PesquisaPage from './pages/PesquisaPage';
import EditarPage from './pages/EditarPage';  // Importa a página de edição

function App() {
  return (
    <Router>
      <div>
        {/* Navegação */}
        <nav>
          <ul>
            <li>
              <Link to="/">Cadastro</Link>
            </li>
            <li>
              <Link to="/pesquisa">Pesquisa</Link>
            </li>
          </ul>
        </nav>

        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<CadastroPage />} />
          <Route path="/pesquisa" element={<PesquisaPage />} />
          <Route path="/editar/:id" element={<EditarPage />} /> {/* Rota de edição */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
