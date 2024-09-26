<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Film;
use App\Models\Store;

class Inventory extends Model
{
    use HasFactory;
    protected $fillable =[
        'inventory_id',
        'film_id',
        'store_id',
        'last_update'
    ];
    protected $primary_key = 'inventory_id';
    protected $table = 'inventory';
    public function film(){
        return $this->belongsTo(Film::class, 'film_id', 'film_id');
    }
    public function store(){
        return $this->belongsTo(Store::class, 'store_id', 'store_id');
    }
}
