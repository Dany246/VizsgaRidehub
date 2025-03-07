<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
        ]);

        Feedback::create([
            'user_id' => Auth::user()->id,
            'rating' => $request->rating,
            'comment' => $request->comment
        ]);

        return redirect()->back();
    }

    public function index()
    {
        $feedbacks = Feedback::all();

        return Inertia::render('Feedback', [
            'feedbacks' => $feedbacks
        ]);
    }
}
