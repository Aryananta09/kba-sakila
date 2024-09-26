<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\City;

class Country extends Model
{
    use HasFactory;
    protected $primary_key = 'country_id';
    protected $table = 'country';
    protected $fillable = [
        'country_id',
        'country',
        'last_update'
    ];

    public function city(){
        return $this->hasMany(City::class, 'country_id', 'country_id');
    }
}
