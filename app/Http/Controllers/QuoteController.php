<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Support\Facades\Auth;

class QuoteController extends Controller
{
    public function index() {
        $user = Auth::user();
        $authors = Author::select('name')
            ->distinct()
            ->orderBy('name')
            ->get()
            ->map(function ($item, $key) { return $item['name']; });

        $js = $authors->toJson();
        $temp = str_replace(" ", "-", $js);

        return view('home')
            ->with('user', $user)
            ->with('authors', $temp);
    }

    public function quote($author) {
        $formattedName = ucwords(str_replace("-", " ", $author));
        $quotes = Author::where('name', $formattedName)
            ->first()
            ->quotes()
            ->get()
            ->map(function ($item) {
                return $item['quote'];
            })
            ->toJson();
        $formattedJson = str_replace(" ", "~", $quotes);
        return view('quotes')
            ->with('author', $author)
            ->with('quotes', $formattedJson);
    }
}
