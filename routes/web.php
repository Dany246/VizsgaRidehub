<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\DriverUserController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RidesController;
use App\Models\Driver;
use App\Models\Order;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/cars', [CarController::class, 'index'])->name('cars.index');
Route::get('/', [DriverController::class, 'index'])->name('drivers.index');
Route::get('/drivers',function () {return Inertia::render('Drivers/Index');})->name('drivers.index');
Route::patch("/drivers/{id}", [DriverController::class, 'update'])->name('drivers.update');
Route::patch("/orders/{id}", [OrderController::class, 'update'])->name('orders.update');
  
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/rides', function () {
    return Inertia::render('Rides/Index');
})->name('rides');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/feedback', [FeedbackController::class, 'index'])->name('feedback.index');
    Route::post('/feedback', [FeedbackController::class, 'store'])->name('feedback.store');
    Route::get('/driver-dashboard', [DriverUserController::class, 'index'])->name('driveruser.index');
    Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
    Route::patch('/car/{id}', [CarController::class, 'update'])->name('car.update');
});


require __DIR__.'/auth.php';