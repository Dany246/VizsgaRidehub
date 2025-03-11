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

        return Inertia::render('Drivers/Index', [
            'drivers' => $drivers
        ]);

    }

}
