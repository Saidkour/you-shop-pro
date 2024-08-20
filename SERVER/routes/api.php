<?php

use App\Http\Controllers\Auth\AdminAuthenticatedSessionController;
use App\Http\Controllers\Auth\AdminRegisteredUserController;
use App\Http\Controllers\Auth\UserAuthenticatedSessionController;
use App\Http\Controllers\Auth\UserRegisteredController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

// Route::prefix('api')->group(function () {

    Route::post('user/register', [UserRegisteredController::class, 'register']);
    Route::post('user/login', [UserAuthenticatedSessionController::class, 'login']);
    Route::post('user/logout', [UserAuthenticatedSessionController::class, 'destroy']);

    Route::post('admin/register', [AdminRegisteredUserController::class, 'register']);
    Route::post('admin/login', [AdminAuthenticatedSessionController::class, 'login']);
    Route::post('admin/logout', [AdminAuthenticatedSessionController::class, 'destroy']);

// });

Route::apiResource('products', ProductController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('orders', OrderController::class);
Route::apiResource('orderItems', OrderItemController::class);
Route::apiResource('feedback', FeedbackController::class);
