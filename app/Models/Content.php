<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;

    public function tasks()
    {
        return $this->hasMany(Content::class);
    }
    public function createdBy()
    {
        return $this->belongsTo(Content::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(Content::class, 'updated_by');
    }
}
