<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class InfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'video' => $this->video ?
                Storage::url($this->video) : '',
            'gambar1' => $this->gambar1 ?
                Storage::url($this->gambar1) : '',
            'gambar2' => $this->gambar2 ?
                Storage::url($this->gambar2) : '',
            'gambar3' => $this->gambar3 ?
                Storage::url($this->gambar3) : '',
            'createdBy' => new InfoResource($this->createdBy),
            'updateBy' => new InfoResource($this->updatedBy),
        ];
    }
}
