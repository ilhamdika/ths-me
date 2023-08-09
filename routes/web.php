<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\AdminPortfolioController;

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

Route::middleware(['auth', 'role:admin'])->prefix('dashboard')->name('admin.dashboard.')->group(function () {
    Route::resource('portfolio', AdminPortfolioController::class);
});

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
        return Inertia::render('Prototype/Admin/Portfolio/Portfolio');
    })->name('prototype.admin.portfolio');
    route::get('admin/add-portfolio', function () {
        return Inertia::render('Prototype/Admin/Portfolio/AddPortfolio');
    })->name('prototype.admin.add-portfolio');

    route::get('admin/about', function () {
        return Inertia::render('Prototype/Admin/AboutMe/AboutMe');
    })->name('prototype.admin.about');
    route::get('admin/edit-about', function () {
        return Inertia::render('Prototype/Admin/AboutMe/EditAboutMe');
    })->name('prototype.admin.edit-about');

    route::get('admin/add-skills', function () {
        return Inertia::render('Prototype/Admin/AboutMe/SkillAdd');
    })->name('prototype.admin.add-skills');
    route::get('admin/skills', function () {
        return Inertia::render('Prototype/Admin/AboutMe/Skills');
    })->name('prototype.admin.skills');

    route::get('portfolio/{id}', function () {
        return Inertia::render('Prototype/PortfolioDetail');
    })->name('prototype.portfolio.detail');
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
