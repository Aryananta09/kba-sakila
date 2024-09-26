<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Film_category;

class Category extends Model
{
    use HasFactory;
    protected $primary_key = 'category_id';
    protected $table = 'category';

    protected $fillable = [
        'category_id',
        'name',
        'last_update'
    ];

    public function film(){
        return $this->hasMany(Film_category::class, 'category_id', 'category_id');
    }
}
