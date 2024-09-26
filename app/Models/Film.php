<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Film_actor;
use App\Models\Film_category;
use App\Models\Inventory;

class Film extends Model
{
    use HasFactory;

    protected $primary_key = 'film_id';
    protected $table = 'film';
    protected $fillable = [
        'film_id',
        'title',
        'description',
        'release_year',
        'language_id',
        'original_language_id',
        'rental_duration',
        'rental_rate',
        'length',
        'replacement_cost',
        'rating',
        'special_fueatures',
        'last_update'
    ];

    public function f_actor(){
        return $this->hasMany(Film_actor::class, 'film_id', 'film_id');
    }
    public function f_category(){
        return $this->hasMany(Film_category::class, 'film_id', 'film_id');
    }
    public function f_inventory(){
        return $this->hasMany(Inventory::class, 'film_id', 'film_id');
    }
}
