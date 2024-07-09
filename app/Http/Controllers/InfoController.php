<?php

namespace App\Http\Controllers;

use App\Http\Resources\InfoResource;
use App\Models\Info;
use App\Http\Requests\StoreInfoRequest;
use App\Http\Requests\UpdateInfoRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class InfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Info::query();
        $infos = $query->paginate(10);
        return inertia("Info/index", [
            "infos" => InfoResource::collection($infos),
        ]);
    }
    public function latest()
    {
        $info = Info::latest()->first(); // Mengambil data terbaru dari tabel info
        return response()->json($info);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Info/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInfoRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('info/' . Str::random(), 'public');
        }
        Info::create($data);

        return to_route('info.index')
            ->with('success', 'Info was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Info $info)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Info $info)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInfoRequest $request, Info $info)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();

        if ($request->hasFile('video')) {
            if ($info->video) {
                Storage::disk('public')->delete($info->video);
            }
            $data['video'] = $request->file('video')->store('info/' . Str::random(), 'public');
        }

        if ($request->hasFile('gambar1')) {
            if ($info->gambar1) {
                Storage::disk('public')->delete($info->gambar1);
            }
            $data['gambar1'] = $request->file('gambar1')->store('info/' . Str::random(), 'public');
        }

        if ($request->hasFile('gambar2')) {
            if ($info->gambar2) {
                Storage::disk('public')->delete($info->gambar2);
            }
            $data['gambar2'] = $request->file('gambar2')->store('info/' . Str::random(), 'public');
        }

        if ($request->hasFile('gambar3')) {
            if ($info->gambar3) {
                Storage::disk('public')->delete($info->gambar3);
            }
            $data['gambar3'] = $request->file('gambar3')->store('info/' . Str::random(), 'public');
        }

        $info->update($data);

        return to_route('info.index')->with('success', "Info was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Info $info)
    {
        //
    }
}
