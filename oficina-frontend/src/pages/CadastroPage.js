import React, { useState } from 'react';
import axios from 'axios';

function CadastroPage() {
  const [formData, setFormData] = useState({
    cliente: '',
    data_hora_orcamento: '',
    vendedor: '',
    descricao: '',
    valor_orcado: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/orcamentos', formData);
      alert('Orçamento cadastrado com sucesso!');
      setFormData({
        cliente: '',
        data_hora_orcamento: '',
        vendedor: '',
        descricao: '',
        valor_orcado: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar orçamento:', error);
    }
  };

  return (
    <div>
      <h1>Cadastro de Orçamento</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <input
          type="text"
          name="cliente"
          value={formData.cliente}
          onChange={handleChange}
          placeholder="Cliente"
        />
        <input
          type="datetime-local"
          name="data_hora_orcamento"
          value={formData.data_hora_orcamento}
          onChange={handleChange}
          placeholder="Data e Hora"
        />
        <input
          type="text"
          name="vendedor"
          value={formData.vendedor}
          onChange={handleChange}
          placeholder="Vendedor"
        />
        <input
          type="text"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Descrição"
        />
        <input
          type="number"
          name="valor_orcado"
          value={formData.valor_orcado}
          onChange={handleChange}
          placeholder="Valor"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroPage;
