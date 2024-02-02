<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')->get();
        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $formFields = $request->validated();

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imagePath = $request->file('image')->store('product_images', 'public');

            $product = Product::create([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'stock' => $request->input('stock'),
                'description' => $request->input('description'),
                'image_url' => '/storage/' . $imagePath,
                'category_id' => $request->input('categoryId'),
            ]);

            return new ProductResource($product);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($productId)
    {
        // Assuming Product is the model for your products
        $product = Product::find($productId);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */

    /**
     * Remove the specified resource from storage.
     */
    public function destory($productId)
    {
        $product = Product::find($productId);
        if ($product) {
            $product->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Product Deleted Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Product Id Found',
            ]);
        }
    }
    public function edit($productId)
    {
        $product = Product::find($productId);
        if ($product) {
            return response()->json([
                'status' => 200,
                'product' => $product,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No product Id Found',
            ]);
        }
    }

    public function update(Request $request, $productId)
    {
        $product = Product::find($productId);

        // Check if category exists
        if (!$product) {
            return response()->json([
                'status' => 404,
                'message' => 'product not found',
            ]);
        }

        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',

        ]);

        // Update the category
        $product->name = $request->input('name');
        $product->description = $request->input('description');


        // Handle the image if it exists in the request
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imagePath = $request->file('image')->store('product_images', 'public');
            $product->image_url = '/storage/' . $imagePath;
        }

        // Save the updated category
        $product->save();

        // Return a response
        return response()->json([
            'status' => 200,
            'message' => 'Category updated successfully',
            'category' => new ProductResource($product),
        ]);
    }
}
