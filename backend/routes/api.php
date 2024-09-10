<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrcamentoController;

Route::get('orcamentos', [OrcamentoController::class, 'index']);
Route::post('orcamentos', [OrcamentoController::class, 'store']);
Route::get('orcamentos/{id}', [OrcamentoController::class, 'show']);
Route::put('orcamentos/{id}', [OrcamentoController::class, 'update']);
Route::delete('orcamentos/{id}', [OrcamentoController::class, 'destroy']);