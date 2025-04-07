<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriverUserController extends Controller
{
    public function index()
    {
        $orders = Order::with(['driver', 'car'])->get();

        return Inertia::render('DriverUser/Index', ['orders' => $orders]);
    }
}
