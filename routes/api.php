<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum', 'ability:client'])->prefix('client')->group(static function () {
    Route::get('/', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('products', ProductController::class);
});

Route::middleware(['auth:sanctum', 'ability:admin'])->prefix('admin')->group(static function () {
    Route::apiResource('products', ProductController::class);

    Route::get('/', function (Request $request) {
        return $request->user();
    });
});

Route::apiResource('products', ProductController::class);




require __DIR__ . '/auth.php';
