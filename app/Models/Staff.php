<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Address;
use App\Models\Payment;
use App\Models\Rental;
use App\Models\Store;

class Staff extends Model
{
    use HasFactory;
    protected $primary_key = 'staff_id';
    protected $table = 'staff';
    protected $fillable = [
        'staff_id',
        'first_name',
        'last_name',
        'email',
        'address_id',
        'active',
        'picture',
        'store_id',
        'last_update'
    ];

    public function address(){
        return $this->belongsTo(Address::class,'address_id', 'address_id' );
    }
    public function store(){
        return $this->belongsTo(Store::class,'store_id', 'store_id');
    }

    public function storeStaff(){
        return $this->hasOne(Store::class, 'manager_staff_id','staff_id');
    }
    public function rental(){
        return $this->hasMany(Rental::class, 'staff_id', 'staff_id');
    }
    public function payment(){
        return $this->hasMany(Payment::class,'staff_id', 'staff_id');
    }
}
