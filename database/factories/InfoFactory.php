<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Info>
 */
class InfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'video' => fake()->url(),
            'gambar1' => fake()->imageUrl(),
            'gambar2' => fake()->imageUrl(),
            'gambar3' => fake()->imageUrl(),
            'created_by' => 1,
            'updated_by' => 1
        ];
    }
}
