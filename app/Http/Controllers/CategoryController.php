<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    public function allCategory()
    {
        $category = Category::where('status', '0')->get();
        return response()->json([
            'status' => 200,
            'category' => $category,
        ]);
    }

    public function store(StoreCategoryRequest $request)
    {
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

    public function edit($categoryId)
    {
        $category = Category::find($categoryId);
        if ($category) {
            return response()->json([
                'status' => 200,
                'category' => $category,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Category Id Found',
            ]);
        }
    }

    public function update(Request $request, $categoryId)
    {
        $category = Category::find($categoryId);

        // Check if category exists
        if (!$category) {
            return response()->json([
                'status' => 404,
                'message' => 'Category not found',
            ]);
        }

        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',

        ]);

        // Update the category
        $category->name = $request->input('name');
        $category->description = $request->input('description');


        // Handle the image if it exists in the request
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $imagePath = $request->file('image')->store('category_images', 'public');
            $category->image_url = '/storage/' . $imagePath;
        }

        // Save the updated category
        $category->save();

        // Return a response
        return response()->json([
            'status' => 200,
            'message' => 'Category updated successfully',
            'category' => new CategoryResource($category),
        ]);
    }
    public function destory($categoryId)
    {
        $category = Category::find($categoryId);
        if ($category) {
            $category->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Category Deleted Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Category Id Found',
            ]);
        }
    }
}
