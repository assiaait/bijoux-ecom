<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
        'firstname',
        'lastname',
        'companyname',
        'streetaddress',
        'streetaddressoptional',
        'city',
        'state_contry',
        'zip',
        'phone',
        'email',
        'ordernotes',
        'total_amount',
        'status',
        'shipping_type',
        'payment_id',
        'payment_mode',
    ];

    public function orderitems(){
        return $this->hasMany(Orderitems::class, 'order_id', 'id');
    }
}
