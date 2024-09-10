import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PesquisaOrcamento = () => {
    const [orcamentos, setOrcamentos] = useState([]);
    const [filters, setFilters] = useState({
        cliente: '',
        data_inicio: '',
        data_fim: '',
        vendedor: ''
    });

    useEffect(() => {
        const fetchOrcamentos = async () => {
            const response = await axios.get('http://localhost:8000/api/orcamentos', { params: filters });
            setOrcamentos(response.data);
        };

        fetchOrcamentos();
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
            <input type="text" name="cliente" value={filters.cliente} onChange={handleFilterChange} placeholder="Filtrar por Cliente" />
            <input type="date" name="data_inicio" value={filters.data_inicio} onChange={handleFilterChange} />
            <input type="date" name="data_fim" value={filters.data_fim} onChange={handleFilterChange} />
            <input type="text" name="vendedor" value={filters.vendedor} onChange={handleFilterChange} placeholder="Filtrar por Vendedor" />

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Data e Hora</th>
                        <th>Vendedor</th>
                        <th>Descrição</th>
                        <th>Valor Orçado</th>
                    </tr>
                </thead>
                <tbody>
                    {orcamentos.map((orcamento) => (
                        <tr key={orcamento.id}>
                            <td>{orcamento.id}</td>
                            <td>{orcamento.cliente}</td>
                            <td>{orcamento.data_hora_orcamento}</td>
                            <td>{orcamento.vendedor}</td>
                            <td>{orcamento.descricao}</td>
                            <td>{orcamento.valor_orcado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PesquisaOrcamento;
