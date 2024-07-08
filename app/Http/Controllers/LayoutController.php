<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function index()
    {
        return inertia('Layout/Layout');
    }
}
