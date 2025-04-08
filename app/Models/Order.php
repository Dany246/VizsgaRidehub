<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    
    protected $fillable = ['car_id', 'from', 'to', 'driver_id', 'payment', 'price', 'status'];

    public function driver(){
        return $this->belongsTo(Driver::class);
    }

    public function car(){
        return $this->belongsTo(Car::class);
    }
}