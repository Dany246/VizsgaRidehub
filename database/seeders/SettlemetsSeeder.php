<?php

namespace Database\Seeders;

use App\Models\Settlement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class SettlemetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          // JSON fájl beolvasása
          $json = File::get(database_path('data/settlements.json'));

          // JSON dekódolása tömbbé
          $settlements = json_decode($json, true);
 
          // Adatok beszúrása az adatbázisba
          foreach ($settlements as $settlement) {
              Settlement::create($settlement);
          }
    }
}


