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

        $driver = Driver::find($request->driver);

        if (!$driver) {
            return back()->with(['message' => 'driver not found.']);
        }

        $driver->update(['status' => 0]);

        $car = Car::find($request->car);

        if (!$car) {
            return back()->with(['message' => 'car not found.']);
        }

        $car->update(['status' => 0]);

        return back()->with(['message' => 'Done']);
    }

    public function getData(){
        $data['data'] = Order::all();
        return Inertia::render('DriverUser/DriverDashboard', $data);
    }


    public function destroy($id)
    {
        $order = Order::find($id);

        $car = Car::find($order->car_id);

        if (!$car) {
            return back()->with(['message' => 'car not found.']);
        }

        $driver = Driver::find($order->driver_id);
        
        if (!$driver) {
            return back()->with(['message' => 'driver not found.']);
        }

        if (!$order) {
            return back()->with(['message' => 'Order not found'], 404);
        }

        $order->delete();
        $driver->update(['status' => 1]);
        $car->update(['status' => 1]);

        return back()->with(['message' => 'Order finished successfully']);
    }
}
