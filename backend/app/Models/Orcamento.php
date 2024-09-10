<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orcamento extends Model
{
    use HasFactory;

    // tabela associada ao modelo
    protected $table = 'orcamentos';

    // campos que podem ser preenchidos
    protected $fillable = [
        'cliente',
        'data_hora_orcamento',
        'vendedor',
        'descricao',
        'valor_orcado',
    ];
}
