<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Settlement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        // $orders = Order::all();
        $settlements = Settlement::all();

        return Inertia::render('Orders/Index', [
            // 'orders' => $orders
            'settlements' => $settlements
        ]);

    }
}
