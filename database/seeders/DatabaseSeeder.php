<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => ' Tóth Bence',
            'email' => 'TBdriver@gmail.com',
            'password' => bcrypt('Passw123'),
            'role' => 'driver',
        ]);

        User::create([
            'name' => 'Éri Tibor Dániel',
            'email' => 'ETDdriver@gmail.com',
            'password' => bcrypt('Passw123'),
            'role' => 'driver',
        ]);
    
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

       $this->call(CarsSeeder::class); 
       $this->call(DriversSeeder::class);
       $this->call(SettlemetsSeeder::class);
    }
}
