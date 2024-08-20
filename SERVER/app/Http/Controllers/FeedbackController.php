<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Feedback::query();

        if ($request->has('status')) {
            $query->where('status', $request->input('status'));
        }

        $feedback = $query->get();

        return response()->json($feedback);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            "message" => "required|string",
            "user_id" => "required|integer"
        ]);
    
        // Feedback::create($request->only('message', 'status'));
        Feedback::create([
            "message" => $request->message,
            "user_id" => $request->user_id,
        ]);

        return response()->json([
            "message" => "the feedback is stored successefully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
       $feedback = Feedback::findOrFail($id);

       $feedback->update(["status" => "posted"]);

       return response()->json([
        "message" => "it is updated successefully",
        "data" =>  $feedback,
       ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        Feedback::destroy($id);
        return response()->json([
            "message" => "it is deleted"
        ]);
    }
}
