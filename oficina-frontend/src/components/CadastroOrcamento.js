import React, { useState } from 'react';
import axios from 'axios';

const CadastroOrcamento = () => {
    const [form, setForm] = useState({
        cliente: '',
        data_hora_orcamento: '',
        vendedor: '',
        descricao: '',
        valor_orcado: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/orcamentos', form);
            alert('Orçamento cadastrado com sucesso!');
            setForm({
                cliente: '',
                data_hora_orcamento: '',
                vendedor: '',
                descricao: '',
                valor_orcado: ''
            });
        } catch (error) {
            alert('Erro ao cadastrar orçamento.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="cliente" value={form.cliente} onChange={handleChange} placeholder="Cliente" required />
            <input type="datetime-local" name="data_hora_orcamento" value={form.data_hora_orcamento} onChange={handleChange} required />
            <input type="text" name="vendedor" value={form.vendedor} onChange={handleChange} placeholder="Vendedor" required />
            <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição" required />
            <input type="number" name="valor_orcado" value={form.valor_orcado} onChange={handleChange} placeholder="Valor Orçado" required />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroOrcamento;
