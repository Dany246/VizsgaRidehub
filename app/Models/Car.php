<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    //

    public $guarded = [];

    public function order() {
        return $this->hasMany(Order::class);
    }
}
