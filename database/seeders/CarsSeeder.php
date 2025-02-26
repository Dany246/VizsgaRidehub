<?php

namespace Database\Seeders;

use App\Models\Car;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class CarsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          // JSON fájl beolvasása
          $json = File::get(database_path('data/Cars.json'));

          // JSON dekódolása tömbbé
          $cars = json_decode($json, true);
 
          // Adatok beszúrása az adatbázisba
          foreach ($cars as $car) {
              Car::create($car);
          }
    }
}
