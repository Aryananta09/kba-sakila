<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Inventory;

class Store extends Model
{
    use HasFactory;
    protected $primary_key = 'store_id';
    protected $table = 'store';
    protected $fillable = [
        'store_id',
        'manager_staff_id',
        'address_id',
        'last_update'
    ];

    public function inv(){
        return $this->hasMany(Inventory::class, 'store_id', 'store_id');
    }
}
