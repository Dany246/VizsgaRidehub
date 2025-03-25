<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriverController extends Controller
{
    
    public function index()
    {
        $drivers = Driver::all();

        return Inertia::render('Welcome', [
            'drivers' => $drivers
        ]);

    }

    public function update(Request $request, $id) {
        $driver = Driver::find($id);

        if (!$driver) {
            return back()->with(['message' => 'driver not found.']);
        }

        $driver->update($request->all('status'));

        return back()->with(['message' => 'Done']);
    }
}
