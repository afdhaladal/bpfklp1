<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'image_path' => $this->image_path,
            'createdBy' => new UserResource($this->createdBy),
            'updateBy' => new UserResource($this->updatedBy),
        ];
    }
}
