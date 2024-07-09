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
        Info::factory()->create([
            'video' => 'profilrfp.mp4',
            'gambar1' => 'gambar1.jpg',
            'gambar2' => 'gambar2.jpg',
            'gambar3' => 'gambar3.jpg',
            'created_by' => 1, // ganti dengan ID user yang valid
            'updated_by' => 1, // ganti dengan ID user yang valid
        ]);
    }
}
