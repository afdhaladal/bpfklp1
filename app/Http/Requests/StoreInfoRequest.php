<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'video' => 'nullable|file|mimetypes:video/mp4,video/x-matroska,video/quicktime',
            'gambar1' => 'nullable|image',
            'gambar2' => 'nullable|image',
            'gambar3' => 'nullable|image',
        ];
    }
}
