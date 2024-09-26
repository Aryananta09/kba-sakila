<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use App\Models\Inventory;
use App\Models\Payment;
use App\Models\Staff;

class Rental extends Model
{
    use HasFactory;
    protected $primary_key = 'rental_id';
    protected $table = 'rental';
    protected $fillable = [
        'rental_id',
        'rental_date',
        'inventory_id',
        'customer_id',  
        'return_date',
        'staff_id',
        'last_update'
    ];

    public function payment(){
        return $this->hasOne(Payment::class, 'rental_id', 'rental_id');
    }
    public function customer(){
        return $this->belongsTo(Customer::class, 'customer_id','customer_id');
    }
    public function staff(){
        return $this->belongsTo(Staff::class, 'staff_id', 'staff_id');
    }
    public function inventory(){
        return $this->belongsTo(Inventory::class, 'inventory_id', 'inventory_id');
    }
}
