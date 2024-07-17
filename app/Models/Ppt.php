<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ppt extends Model
{
    use HasFactory;
    protected $fillable = [
        'slide', 'created_by', 'updated_by'
    ];

    public function createdBy(){
        return $this->belongsTo(Ppt::class, 'created_by');
    }

    public function updatedBy(){
        return $this->belongsTo(Ppt::class, 'updated_by');
    }
}
