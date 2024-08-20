<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $query = Category::with('product');
        $categories = $query->get();
        return response()->json($categories, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|unique:categories,name|max:255',
            'desc' => 'required|string',
        ]);

        Category::create($request->all());

        return response()->json([
            'message' => 'Category created successfully',
            'data' =>  $request->name
        ], 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $categories = Category::with('Product')->findOrFail($id);
        return response()->json($categories);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $category = Category::findOrFail($id);
        
        $request->validate([
            "name" => "sometimes|string|unique:categories,name," . $id,
            "desc" => "sometimes|string"
        ]);
    
        // Log the incoming request data
        \Log::info('Updating category:', $request->only(['name', 'desc']));
    
        $category->update($request->only(['name', 'desc']));
    
        return response()->json([
            "message" => "it is updated",
            "data" => $category
        ]);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        Category::destroy($id);
        return response()->json([
         "message" => "category is deleted !"
        ]);
    }
}
