<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::redirect('/', 'index');

Route::prefix('prototype')->group(function () {
    route::get('index', function () {
        return Inertia::render('Prototype/Index');
    })->name('prototype.index');
    route::get('portfolio', function () {
        return Inertia::render('Prototype/Portfolio');
    })->name('prototype.portfolio');
    route::get('about', function () {
        return Inertia::render('Prototype/AboutMe');
    })->name('prototype.about');

    route::get('admin', function () {
        return Inertia::render('Prototype/Admin/Index');
    })->name('prototype.admin');
    route::get('admin/portfolio', function () {
        return Inertia::render('Prototype/Admin/Portfolio');
    })->name('prototype.admin.portfolio');
    route::get('admin/about', function () {
        return Inertia::render('Prototype/Admin/AboutMe');
    })->name('prototype.admin.about');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
