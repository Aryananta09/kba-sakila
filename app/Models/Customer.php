<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;
use App\Models\Payment;
use App\Models\Rental;
use App\Models\Store;

class Customer extends Model
{
    use HasFactory;
    protected $primary_key = 'customer_id';
    protected $table = 'customer';
    protected $fillable = [
        'customer_id',
        'store_id',
        'first_name',
        'last_name',
        'email',
        'address_id',
        'active',
        'create_date',
        'last_update'
    ];

    public function store(){
        return $this->belongsTo(Store::class, 'store_id', 'store_id');
    }
    public function address(){
        return $this->belongTo(Address::class, 'address_id', 'address_id');
    }

    public function rental(){
        return $this->hasMany(Rental::class, 'customer_id', 'customer_id');
    }
    public function payment(){
        return $this->hasMany(Payment::class, 'customer_id', 'customer_id');
    }
}
