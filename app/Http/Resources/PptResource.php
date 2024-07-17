<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PptResource extends JsonResource
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
            'slide' => $this->slide ?
                Storage::url($this->slide) : '',
            'createdBy' => new PptResource($this->createdBy),
            'updateBy' => new PptResource($this->updatedBy),
        ];
    }
}
