<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ppts', function (Blueprint $table) {
            $table->id();
            $table->string('slide')->nullable();
            $table->foreignId('created_by')->constrained('ppts');
            $table->foreignId('updated_by')->constrained('ppts');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ppts');
    }
};
