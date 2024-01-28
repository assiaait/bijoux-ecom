<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        return CategoryResource::collection(Category::all());
    }
    
    public function store(StoreCategoryRequest $request) {
        $formFields = $request->validated();

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imagePath = $request->file('image')->store('category_images', 'public');

            $category = Category::create([
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'image_url' => '/storage/' . $imagePath,
            ]);

            return new CategoryResource($category);
        }
    }
    
    
}
