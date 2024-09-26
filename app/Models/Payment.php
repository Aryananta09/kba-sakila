<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Rental;
use App\Models\Customer;
use App\Models\Staff;

class Payment extends Model
{
    use HasFactory;
    protected $primary_key = 'payment_id';
    protected $table = 'payment';
    protected $fillable = [
        'payment_id',
        'customer_id',
        'staff_id',
        'rental_id',
        'amount',
        'payment_date',
        'last_update'
    ];

    public function rental(){
        return $this->belongsTo(Rental::class, 'rental_id', 'rental_id');
    }
    public function customer(){
        return $this->belongsTo(Customer::class, 'customer_id', 'customer_id');
    }
    public function staff(){
        return $this->belongsTo(Staff::class, 'staff_id', 'staff_id');
    }
}
