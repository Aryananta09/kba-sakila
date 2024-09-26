<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Country;

class City extends Model
{
    use HasFactory;
    protected $primary_key = 'city_id';
    protected $table = 'city';
    protected $fillable = [
        'city_id',
        'city',
        'country_id',
        'last_update'
    ];

    public function country(){
        return $this->belongsTo(Country::class, 'country_id', 'country_id');
    }
}
