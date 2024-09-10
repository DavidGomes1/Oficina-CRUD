<?php

namespace App\Http\Controllers;

use App\Models\Orcamento;
use Illuminate\Http\Request;

class OrcamentoController extends Controller
{
    // Listar todos os orçamentos
    public function index(Request $request)
{
    $query = Orcamento::query();

    // Filtro por data de início
    if ($request->has('data_inicio')) {
        $query->whereDate('data_hora_orcamento', '>=', $request->input('data_inicio'));
    }

    // Filtro por data de fim
    if ($request->has('data_fim')) {
        $query->whereDate('data_hora_orcamento', '<=', $request->input('data_fim'));
    }

    // Filtro por cliente
    if ($request->has('cliente')) {
        $query->where('cliente', 'like', '%' . $request->input('cliente') . '%');
    }

    // Filtro por vendedor
    if ($request->has('vendedor')) {
        $query->where('vendedor', 'like', '%' . $request->input('vendedor') . '%');
    }

    // Retornar os orçamentos filtrados
    return $query->get();
}

    // Criar um novo orçamento
    public function store(Request $request)
    {
        $request->validate([
            'cliente' => 'required|string',
            'data_hora_orcamento' => 'required|date',
            'vendedor' => 'required|string',
            'descricao' => 'required|string',
            'valor_orcado' => 'required|numeric',
        ]);

        $orcamento = Orcamento::create($request->all());

        return response()->json($orcamento, 201);
    }

    // Mostrar um orçamento específico
    public function show($id)
    {
        return Orcamento::findOrFail($id);
    }

    // Atualizar um orçamento existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'cliente' => 'required|string',
            'data_hora_orcamento' => 'required|date',
            'vendedor' => 'required|string',
            'descricao' => 'required|string',
            'valor_orcado' => 'required|numeric',
        ]);

        $orcamento = Orcamento::findOrFail($id);
        $orcamento->update($request->all());

        return response()->json($orcamento, 200);
    }

    // Remover um orçamento
    public function destroy($id)
    {
        Orcamento::destroy($id);

        return response()->json(null, 204);
    }
}

