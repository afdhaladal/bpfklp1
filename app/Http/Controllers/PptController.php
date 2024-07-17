<?php

namespace App\Http\Controllers;

use App\Http\Resources\PptResource;
use Illuminate\Http\Request;
use App\Http\Requests\StorePptRequest;
use App\Http\Requests\UpdatePptRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Ppt;

class PptController extends Controller
{
    public function index()
    {
        $query = Ppt::query();
        $ppts = $query->paginate(10);
        return inertia("ppt/index", [
            "ppts" => PptResource::collection($ppts),
        ]);
    }
    public function create()
    {
        return inertia("Ppt/Create");
    }
    public function store(StorePptRequest $request)
    {
        $data = $request->validated();
        $image = $data['slide1'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['slide'] = $image->store('ppt/' . Str::random(), 'public');
        }
        Ppt::create($data);

        return to_route('info.index')
            ->with('success', 'Info was created');
    }
    public function update(UpdatePptRequest $request, Ppt $ppt)
    {
        $name = $ppt->name;
        $data = $request->validated();
        $image = $data['slide1'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($ppt->slide) {
                Storage::disk('public')->delete($ppt->slide);
            }
            $data['slide'] = $image->store('ppt/' . Str::random(), 'public');
        }
        $ppt->update($data);

        return to_route('info.index')->with('success', "Info was updated");
    }
}
