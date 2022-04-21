<?php

use App\Models\Quote;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function() {
    $user = Auth::user();
    $authors = Quote::select('author')
        ->distinct()
        ->orderBy('author')
        ->get()
        ->map(function ($item, $key) { return $item['author']; });

    $js = $authors->toJson();
    $temp = str_replace(" ", "-", $js);

    return view('home')
        ->with('user', $user)
        ->with('authors', $temp);
})->middleware('auth');
