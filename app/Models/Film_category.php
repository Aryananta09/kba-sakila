<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Film;

class Film_category extends Model
{
    use HasFactory;
    protected $table = 'film_category';
    protected $fillable = [
        'film_id',
        'category_id',
        'last_update'
    ];

    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'category_id');
    }
    public function film(){
        return $this->belongsTo(Film::class,'film_id', 'film_id');
    }
}
