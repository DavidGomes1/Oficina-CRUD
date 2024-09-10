import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PesquisaPage() {
  const [orcamentos, setOrcamentos] = useState([]);
  const [filteredOrcamentos, setFilteredOrcamentos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOrcamentos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/orcamentos');
        setOrcamentos(response.data);
        setFilteredOrcamentos(response.data);
      } catch (error) {
        console.error('Erro ao buscar orçamentos:', error);
      }
    };

    fetchOrcamentos();
  }, []);

  useEffect(() => {
    const results = orcamentos.filter((orcamento) =>
      orcamento.cliente.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrcamentos(results);
  }, [searchTerm, orcamentos]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/orcamentos/${id}`);
      setOrcamentos(orcamentos.filter((orcamento) => orcamento.id !== id));
      setFilteredOrcamentos(filteredOrcamentos.filter((orcamento) => orcamento.id !== id));
    } catch (error) {
      console.error('Erro ao excluir orçamento:', error);
    }
  };

  return (
    <div>
      <h1>Pesquisa de Orçamentos</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquisar por cliente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data e Hora</th>
            <th>Vendedor</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrcamentos.length > 0 ? (
            filteredOrcamentos.map((orcamento) => (
              <tr key={orcamento.id}>
                <td>{orcamento.cliente}</td>
                <td>{new Date(orcamento.data_hora_orcamento).toLocaleString()}</td>
                <td>{orcamento.vendedor}</td>
                <td>{orcamento.descricao}</td>
                <td>{orcamento.valor_orcado}</td>
                <td>
                  <Link to={`/editar/${orcamento.id}`} className="edit-button">Editar</Link>
                  <button onClick={() => handleDelete(orcamento.id)} className="delete-button">Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhum orçamento encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PesquisaPage;
