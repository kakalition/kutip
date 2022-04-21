<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quote;
use Illuminate\Support\Facades\Auth;

class QuoteController extends Controller
{
    public function index() {
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
    }

    public function quote($author) {
        $formattedName = ucwords(str_replace("-", " ", $author));
        $quotes = Quote::select('quote')
            ->where('author', '=', $formattedName)
            ->get()
            ->toJson();
        return $quotes;
    }
}
