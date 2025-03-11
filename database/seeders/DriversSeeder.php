<?php

namespace Database\Seeders;

use App\Models\Driver;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Seeder;

class DriversSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          // JSON fájl beolvasása
          $json = File::get(database_path('data/Drivers.json'));

          // JSON dekódolása tömbbé
          $drivers = json_decode($json, true);
 
          // Adatok beszúrása az adatbázisba
          foreach ($drivers as $driver) {
              Driver::create($driver);
          }
    }
}
