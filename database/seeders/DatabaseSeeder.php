<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Info;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Info::factory()
            ->count(30)
            ->hasTasks(30)
            ->create();
    }
}
