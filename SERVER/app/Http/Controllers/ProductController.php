<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Product::with('category');

        if($request->has('category_id')){
            $query->where('category_id', $request->input('category_id'));
        }

        if($request->has('price')){
            $query->where('price', $request->input('price'));
        }

        $products = $query->get();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image',
            'description' => 'required|string',
            'features' => 'required|string',
            'price' => 'required|numeric|min:0|max:999999.99',
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $product = Product::create([
                'name' => $request->name,
                'image' => 'storage/' . $path, 
                'description' => $request->description,
                'features' => $request->features,
                'price' => $request->price,
                'category_id' => $request->category_id,
            ]);
            
        }
        
        return response()->json([
            'message' => 'The product was added successfully',
            'product' => $product
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::findOrFail($id);

        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|string',
            'description' => 'required|string',
            'features' => 'required|string',
            'price' => 'required|numeric|min:0|max:999999.99',
            'category_id' => 'required|exists:categories,id',
        ]);

        $product->update($request->all());

        return response()->json([
            'message' => 'Product updated successfully',
            'data' => $product
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $shownProduct = Product::find($id);
        Product::destroy($id);
        return response()->json([
            "product" =>  $shownProduct->name,
            "message" => "the prouduct was deleted !",

        ]);
    }

}
