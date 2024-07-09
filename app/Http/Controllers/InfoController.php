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
        return inertia("Info/index",[
            "infos" => InfoResource::collection($infos),
        ]);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Info $info)
    {
        //
    }
}
