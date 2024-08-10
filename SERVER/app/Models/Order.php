<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['firstname', 'lastname', 'country', 'city', 'town', 'phoneNumber', 'remarks', 'payment_key', 'total_price', 'status', 'user_id' ];
    // protected $fillable = ['firstname', 'lastname', 'country', 'city', 'town', 'phoneNumber', 'remarks', 'payment_key', 'total_price', 'status' ];

    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    public function orderItems() 
    {
        return $this->hasMany(orderItems::class);
    }
}