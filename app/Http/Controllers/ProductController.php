<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProductResource::collection(Product::all());

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
            ]);
    
            return new ProductResource($product);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
            if(auth('sanctum')->check()){
                $user_id = auth('sanctum')->user()->id;
            
            }else {
                return response()->json([
                    'status' => 401,
                    'message' => 'Login to continue'
                ]);
            }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
