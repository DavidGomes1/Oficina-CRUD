import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditarPage() {
  const { id } = useParams();
  const [orcamento, setOrcamento] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrcamento = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/orcamentos/${id}`);
        setOrcamento(response.data);
      } catch (error) {
        console.error('Erro ao buscar orçamento:', error);
      }
    };

    fetchOrcamento();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrcamento((prevOrcamento) => ({
      ...prevOrcamento,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/orcamentos/${id}`, orcamento);
      navigate('/pesquisa');
    } catch (error) {
      console.error('Erro ao atualizar orçamento:', error);
    }
  };

  if (!orcamento) return <div>Carregando...</div>;

  return (
    <div className="edit-form-container">
      <h1>Editar Orçamento</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Cliente:
          <input
            type="text"
            name="cliente"
            value={orcamento.cliente}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Data e Hora:
          <input
            type="datetime-local"
            name="data_hora_orcamento"
            value={new Date(orcamento.data_hora_orcamento).toISOString().slice(0, -1)}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vendedor:
          <input
            type="text"
            name="vendedor"
            value={orcamento.vendedor}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Descrição:
          <textarea
            name="descricao"
            value={orcamento.descricao}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Valor:
          <input
            type="number"
            name="valor_orcado"
            value={orcamento.valor_orcado}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Salvar</button>
        <button type="button" className="cancel-button" onClick={() => navigate('/pesquisa')}>Cancelar</button>
      </form>
    </div>
  );
}

export default EditarPage;
