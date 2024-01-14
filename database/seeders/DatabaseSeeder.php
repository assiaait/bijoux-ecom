<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use App\Models\Client;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'assia',
            'email' => 'assia@gmail.com',
            'password' => bcrypt('1234567890')
        ]);
        Admin::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('1234567890')
        ]);
        Client::factory()->create([
            'name' => 'client',
            'email' => 'client@gmail.com',
            'password' => bcrypt('1234567890')
        ]);
    }
}
