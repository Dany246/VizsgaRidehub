<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Driver;
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
        $driver = Driver::all();
        $car = Car::all();

        return Inertia::render('Orders/Index', [
            // 'orders' => $orders
            'settlements' => $settlements,
            'drivers'=>$driver,
            'cars'=>$car
        ]);

    }

  

    public function store(Request $request)
    {
        $request->validate([
            'settlement_from' => 'required',
            'settlement_to' => 'required',
            'driver' => 'required',
            'car' => 'required',
        ]);

        $order = new Order();
        $order->from = $request->settlement_from;
        $order->to = $request->settlement_to;
        $order->car_id = $request->car;
        $order->driver_id = $request->driver;
        $order->save();

        return back()->with(['message' => 'Done']);
    }

    public function getData(){
        $data['data'] = Order::all();
        return Inertia::render('DriverUser/DriverDashboard', $data);
    }
}
