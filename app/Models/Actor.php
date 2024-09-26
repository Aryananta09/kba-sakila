<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Film_actor;

class Actor extends Model
{
    use HasFactory;

    protected $table = 'actor';
    protected $primary_key = 'actor_id';

    protected $fillable = [
        'actor_id',
        'first_name',
        'last_name'
    ];

    public function filmactor(){
        return $this->hasMany(Film_actor::class, 'actor_id', 'actor_id');
    }
    
}
