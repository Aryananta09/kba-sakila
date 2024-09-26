<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\City;
use App\Models\Customer;
use App\Models\Store;
use App\Models\Staff;

class Address extends Model
{
    use HasFactory;
    protected $primary_key = 'address_id';
    protected $table = 'address';
    protected $fillable = [
        'address_id',
        'address',
        'address_2',
        'district',
        'city_id',
        'postal_code',
        'phone',
        'last_update'
    ];

    public function city(){
        return $this->belongsTo(City::class, 'city_id', 'city_id');
    }
    public function customer(){
        return $this->hasMany(Customer::class,'address_id','address_id');
    }
    public function staff(){
        return $this->hasOne(Staff::class,'address_id','address_id');
    }
    public function store(){
        return $this->hasOne(Store::class,'address_id','address_id');
    }
}
